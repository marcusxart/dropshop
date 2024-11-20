import { useState } from "react";
import InputField from "../components/InputField/index";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import toast from "react-hot-toast";
import axios from "axios";

const ForgotPassword = () => {
  const [isSend, setIsSend] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  // API URL for the forgotten password
  //   const url = `${import.meta.env.VITE_DEVE_URL}/auth/forget-password`;

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const toastLoadingId = toast.loading("Please wait...");

    if (!email) {
      toast.error("Email is required");
      toast.dismiss(toastLoadingId);
      return;
    }

    try {
      await axios.post("https://dropshop-server.onrender.com/forgetPassword", {
        email,
      });
      setIsSend(true);
      setEmail("");
      toast.success("Password reset link sent!", { duration: 3000 });
      navigate("/auth/verify-otp");
    } catch (error) {
      const errorMsg = axios.isAxiosError(error)
        ? error.response?.data?.message || "An error occurred"
        : "An unknown error occurred";
      toast.error(errorMsg);
    } finally {
      setloading(false);
      toast.dismiss(toastLoadingId);
    }
  };

  return (
    <>
      {!isSend ? (
        <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
          <div className="w-full h-[8rem] gap-2 flex-col px-2 flex justify-center items-center">
            <p className=" text-2xl  font-bold">Forgot Password ?</p>
            <p className=" text-center text-gray-600">
              Enter your email and phone, and we&lsquo;ll send you a link to
              reset your password
            </p>
          </div>
          <InputField
            placeholder="Enter your email address…"
            type="email"
            value={email}
            onChange={setEmail}
            required
            check={true}
          />
          <Button
            type="submit"
            text={loading ? "Loading...." : "Submit"}
            full
            border
            disabled={loading}
          />

          <p
            className=" mt-[10px] px-4  rounded font-semibold gap-2 text-slate-500 border-[#FFC7274D]  border cursor-pointer  py-2 flex justify-center items-center"
            onClick={() => navigate("/auth/login")}
          >
            Back to login <MdArrowRightAlt size={30} />
          </p>
        </form>
      ) : (
        <p className="text-center text-[14px] leading-[24px] text-[#969799]">
          Password reset link sent! Please check your inbox.
        </p>
      )}
    </>
  );
};

export default ForgotPassword;
