import { MdArrowRightAlt } from "react-icons/md";
import InputField from "../../components/InputField/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast"; // React hot toast for notifications
import { useSelector } from "react-redux";

const RiderRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guarantor, setGuarantorName] = useState("");
  const [guarantorNumber, setGuarantorNumber] = useState("");
  const [address, setAddress] = useState("");
  const [riderNumber, setRiderNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const admindata = useSelector((state) => state.admin.admin);
  const headers = {
    Authorization: `Bearer ${admindata.token}`,
  };

  const data = {
    name,
    email,
    password,
    guarantor,
    guarantorNumber,
    riderNumber,
    address,
  };

  const HandleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastLoading = toast.loading("Registering...");

    try {
      const response = await axios.post(
        "https://dropshop-server.onrender.com/api/registerRider",
        data,
        { headers }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Registration successful! Redirecting to login...");

        setTimeout(() => {
          navigate("/rider-auth/rider-login");
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
        <p className="font-semibold text-xl">Create Your Rider Account</p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <InputField
          placeholder="Enter your FullName"
          type="text"
          value={name}
          onChange={setName}
        />
        <InputField
          placeholder="Enter your Guarantor Name"
          type="text"
          value={guarantor}
          onChange={setGuarantorName}
        />
        <InputField
          placeholder="Enter your Guarantor Number"
          type="text"
          value={guarantorNumber}
          onChange={setGuarantorNumber}
        />
        <InputField
          placeholder="Enter your  Number"
          type="text"
          value={riderNumber}
          onChange={setRiderNumber}
        />
        <InputField
          placeholder="Enter your Address"
          type="text"
          value={address}
          onChange={setAddress}
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
          onClick={() => navigate("/rider-auth/rider-login")}
        >
          I already have an account? <MdArrowRightAlt size={30} />
        </p>
      </div>
    </form>
  );
};

export default RiderRegister;
