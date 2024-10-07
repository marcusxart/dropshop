import InputField from "../components/InputField/index";
import Button from "../components/Button";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <form>
      <div className="flex flex-col gap-[20px]">
        <div className="w-full h-[4rem] flex justify-center items-center">
          <p className=" font-semibold text-xl">Login To DropShop </p>
        </div>
        <InputField
          placeholder="Enter your email address…"
          type="email"
          required
        />
        <InputField
          placeholder="Enter your password"
          type="password"
          required
        />
        <Button
          type="submit"
          text="Login your account"
          full
          border
          // Disable button while loading
        />
      </div>

      <div className="mt-[40px] text-center text-[14px] text-[#969799] leading-[24px] [&_a]:text-[#FFFFFF]">
        <span className=" font-semibold text-gray-600">Forgot password?</span>
        <div className="w-full h-[20%] mt-[20px] py-3 rounded border gap-2 border-[#FFC7274D] flex justify-center items-center ">
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
