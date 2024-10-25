import InputField from "../../components/InputField/index";
import Button from "../../components/Button";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setRider } from "../../Global/rideSlic";

const RiderLogin = () => {
  const navigate = useNavigate();

  const [riderName, setRiderName] = useState("");
  const [riderpassword, setRiderpassword] = useState("");
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const HandleLogin = async (e) => {
    e.preventDefault();
    setloading(true);

    const toastLoading = toast.loading("Please wait...");

    const data = { riderName, riderpassword };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/loginRider",
        data
      );
      toast.success("Login Successful");
      dispatch(setRider(response.data));
      console.log(response.data);
      navigate("/rider/orders");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed!");
    } finally {
      setloading(false);
      toast.dismiss(toastLoading);
    }
  };

  return (
    <form onSubmit={HandleLogin}>
      <div className="flex flex-col gap-[20px]">
        <div className="w-full h-[4rem] flex justify-center items-center">
          <p className=" font-semibold text-xl">Rider Login</p>
        </div>
        <InputField
          placeholder="Enter your Name"
          type="text"
          value={riderName}
          onChange={setRiderName}
          required
        />
        <InputField
          placeholder="Enter your password"
          type="password"
          value={riderpassword}
          onChange={setRiderpassword}
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
            onClick={() => navigate("/rider-auth/rider-reg")}
          >
            Sign up <MdArrowRightAlt />
          </p>
        </div>
      </div>
    </form>
  );
};

export default RiderLogin;
