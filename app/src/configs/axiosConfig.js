import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://dropshop-server.onrender.com/api/",
});

axios.interceptors.response();
export default axios;