import { MdArrowRightAlt } from "react-icons/md";
import InputField from "../components/InputField/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast"; // React hot toast for notifications

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const data = { name, email, password };

  const HandleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastLoading = toast.loading("Registering...");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/signup",
        data
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Registration successful! Redirecting to login...");

        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      toast.dismiss(toastLoading);
      setLoading(false); // Stop loading state
    }
  };

  return (
    <form className="max-md:w-[92%]" onSubmit={HandleRegister}>
      <div className="w-full h-[4rem] flex justify-center items-center">
        <p className="font-semibold text-xl">Create Your Account</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <InputField
          placeholder="Enter your FullName"
          type="text"
          value={name}
          onChange={setName}
        />
        <InputField
          placeholder="Enter your email address"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <InputField
          placeholder="Enter your Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <Button
          type="submit"
          text={loading ? "Creating Account..." : "Create Account"}
          full
          border
          disabled={loading} // Disable button while loading
        />
      </div>
      <div className="w-full h-[4%] mt-[20px] text-sm rounded gap-2 flex justify-center flex-col items-center">
        <p className="text-slate-400">
          By signing up, you agree to our{" "}
          <a href="#" className="font-extrabold">
            Terms of Service
          </a>
        </p>
        <p
          className="mt-[10px] px-4 rounded font-semibold gap-2 text-slate-500 border-[#FFC7274D] border cursor-pointer py-2 flex justify-center items-center"
          onClick={() => navigate("/auth/login")}
        >
          I already have an account? <MdArrowRightAlt size={30} />
        </p>
      </div>
    </form>
  );
};

export default Register;
