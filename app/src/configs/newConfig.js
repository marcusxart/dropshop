import Axios from "axios";
import deleteCookies from "./deleteCookies";
import errorToast from "../components/errotToast";

// import authRoutes from "./authRoutes";

const axios = Axios.create({
  baseURL: "https://dev-117782726-api.learngual.com",
});

axios.interceptors.request.use(
  async (config) => {
    const cookies = document.cookie;
    const cookieArray = cookies.split(";");

    let token;
    let defaultAccountID;
    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.startsWith("access=")) {
        token = cookie.substring("access=".length, cookie.length);
        break;
      }
    }
    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.startsWith("defaultAccountID=")) {
        defaultAccountID = cookie.substring(
          "defaultAccountID=".length,
          cookie.length
        );
        break;
      }
    }

    // Add additional logic to check if the current request path matches any authRoutes

    const currentPath = config.url;

    // const matchedRoute = authRoutes.find((route) => {
    //   // console.log(route, currentPath);
    //   return currentPath.includes(route);
    // });

    // if (matchedRoute) {

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      const params = {
        ...config.params,
        _account: defaultAccountID,
        //
      };
      config.params = params;
    }

    /// return

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (err) => {
//     if (err) {
//       if (err.response?.status === 403 || err.response?.status === 401) {
//         // Error toast
//         toast.error(err?.response.data?.detail);
//         console.log(err?.response.data?.detail, "Error Response");

//         const host = window.location.hostname;
//         const port = window.location.port ? `:${window.location.port}` : "";
//         const protocol = window.location.protocol;
//         const uri = `${protocol}//${host}${port}/auth/sign-in/`;

//         deleteCookies("access");
//         deleteCookies("refresh");
//         window.location.href = uri;
//       }
//     }
//     throw err;
//   }
// );

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error.response?.status;
    const errors = error.response?.data?.errors || [];
    const firstErrorDetail2 = error?.response?.data?.detail;
    const firstErrorDetail =
      errors.length > 0 ? errors[0].detail : "An unspecified error occurred";

    const host = window.location.hostname;
    const port = window.location.port ? `:${window.location.port}` : "";
    const protocol = window.location.protocol;

    const cookies = document.cookie;
    const cookieArray = cookies.split(";");

    let rememberMe;
    let refreshCookie;

    cookieArray?.forEach((cookieValue) => {
      const cookie = cookieValue?.trim();
      if (cookie.startsWith("rememberMe=")) {
        rememberMe = Boolean(
          cookie.substring("rememberMe=".length, cookie.length)
        );
      }
      if (cookie.startsWith("refresh=")) {
        refreshCookie = cookie.substring("refresh=".length, cookie.length);
      }
    });

    if (status === 400 || status === 404) {
      // toast.error();
      if (errors[0]) {
        errorToast(firstErrorDetail);
      } else if (firstErrorDetail2) {
        errorToast(firstErrorDetail2);
      }
    } else if (status === 401) {
      if (rememberMe && refreshCookie) {
        try {
          const refreshResponse = await axios.post("/iam/v1/auth/refresh/", {
            refresh: refreshCookie,
          });
          const date = new Date();
          date.setDate(date.getDate() + 20);

          const expires = "; expires=" + date.toUTCString();

          const newToken = refreshResponse.data.access;

          const domain = window.location.href.includes("localhost")
            ? ".localhost"
            : ".learngual.com";
          const path = "; path=/";

          document.cookie =
            "access=" + newToken + expires + "; domain=" + domain + path;
          error.config.headers.Authorization = `Bearer ${newToken}`;
          window.location.reload();
        } catch (error) {
          const url = `${protocol}//${host}${port}/auth/sign-in/`;
          deleteCookies("access");
          deleteCookies("refresh");
          window.location.href = url;
        }
      }
      if (!window.location.pathname.includes("sign")) {
        // const err =
        //   error?.response.data?.detail || "Authorization error occurred";
        if (errors[0]) {
          errorToast(firstErrorDetail);
        } else if (firstErrorDetail2) {
          errorToast(firstErrorDetail2);
        }
        // console.log(`${status} Error: `, err);

        const url = `${protocol}//${host}${port}/auth/sign-in/`;

        deleteCookies("access");
        deleteCookies("refresh");
        window.location.href = url;
      }
    } else {
      console.log("Unhandled Error: ", firstErrorDetail);
    }

    throw error;
  }
);

export default axios;
