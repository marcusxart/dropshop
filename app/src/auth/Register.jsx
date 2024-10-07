import { MdArrowRightAlt } from "react-icons/md";
import InputField from "../components/InputField/index";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Register = () => {
  const navigate = useNavigate();

  return (
    <form>
      <div className="w-full h-[4rem] flex justify-center items-center">
        <p className=" font-semibold text-xl">Create Your Account</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <InputField placeholder="Enter your FullName" type="text" />
        <InputField placeholder="Enter your UserName" type="text" />
        <InputField placeholder="Enter your email address" type="email" />
        <InputField placeholder="Enter your Password" type="password" />
        <Button
          type="submit"
          text="Create Account"
          full
          border
          // Disable button while loading
        />
      </div>
      <div className="w-full h-[4%] mt-[20px]  text-sm rounded gap-2  flex justify-center flex-col items-center ">
        <p className=" text-slate-400">
          By signing up, you agree to our{" "}
          <a href="#" className=" font-extrabold">
            Terms of Service
          </a>
        </p>
        <p
          className=" mt-[10px] px-4  rounded font-semibold gap-2 text-slate-500 border-[#FFC7274D]  border cursor-pointer  py-2 flex justify-center items-center"
          onClick={() => navigate("/auth/login")}
        >
          I already have an account? <MdArrowRightAlt size={30} />
        </p>
      </div>
    </form>
  );
};

export default Register;
