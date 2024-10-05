import React, { useState } from "react";
import InputField from "../components/InputField/index";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
        <p>
          By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Data Processing Agreement</a>
        </p>
        <p className="mt-[40px] mb-[32px]">
          Don’t have an account? <Link to="/auth/sign-up"> Sign up -{">"}</Link>
        </p>
        <Link to="/auth/forgetten-password">Forgot password?</Link>
      </div>
    </form>
  );
};

export default Login;
