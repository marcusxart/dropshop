import InputField from "../components/InputField/index";
import Button from "../components/Button";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCustomer } from "../Global/customerSlice";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Login = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    const toastLoading = toast.loading("Please wait...");

    const data = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        data
      );

      if (response.status === 201 || response.status === 200) {
        const customerData = response.data;
        toast.success("Login successful! Redirecting to Home...");

        dispatch(setCustomer(customerData));

        // Emit the `userLogin` event with customer details
        socket.emit("userLogin", {
          name: customerData.name, // or other unique identifier
          id: customerData.id, // Assuming there's an `id` in customerData
        });

        console.log(
          `User logged in: Name - ${customerData.name}, ID - ${customerData.id}`
        );

        // Navigate after login
        setTimeout(() => {
          navigate("/user/home");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed!");
    } finally {
      toast.dismiss(toastLoading);
      setloading(false);
    }
  };

  useEffect(() => {
    // Confirm connection to backend on initial load
    socket.on("connect", () => {
      console.log("Connected to Socket.IO server:", socket.id);
    });

    return () => {
      // Cleanup socket connection on component unmount
      socket.off("connect");
    };
  }, []);

  return (
    <form onSubmit={HandleLogin}>
      <div className="flex flex-col gap-[20px]">
        <div className="w-full h-[4rem] flex justify-center items-center">
          <p className=" font-semibold text-xl">Login To DropShop </p>
        </div>
        <InputField
          placeholder="Enter your email address…"
          type="email"
          value={email}
          onChange={setemail}
          required
        />
        <InputField
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={setpassword}
          required
        />
        <Button
          type="submit"
          text={loading ? "Signing..." : "Sign In"}
          full
          border
          disabled={loading}
        />
      </div>

      <div className="mt-[40px] text-center text-[14px] text-[#969799] leading-[24px] [&_a]:text-[#FFFFFF]">
        <span
          className=" font-semibold text-gray-600 cursor-pointer"
          onClick={() => navigate("/auth/forgotten-pass")}
        >
          Forgot password?
        </span>
        <div className="w-full h-[20%] mt-[20px] px-5 py-3 rounded border gap-2 border-[#FFC7274D] flex justify-center items-center max-md:px-6 ">
          <p className=" font-semibold text-slate-700">
            Don’t have an account?{" "}
          </p>
          <p
            className=" font-semibold text-slate-300 cursor-pointer  flex justify-center items-center"
            onClick={() => navigate("/auth/register")}
          >
            Sign up <MdArrowRightAlt />
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
