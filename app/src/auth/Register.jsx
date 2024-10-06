import InputField from "../components/InputField/index";

const Register = () => {
  return (
    <form>
      <div className="flex flex-col gap-[20px]">
        <InputField placeholder="Enter your email address…" type="email" />
        <InputField placeholder="Enter your password" type="password" />
        <InputField placeholder="Retype your password" type="password" />
        <InputField placeholder="Referral Code (Optional)" type="text" />
      </div>
      <div className="mt-[40px] text-center  text-[14px] text-[#969799] leading-[24px] [&_a]:text-[#FFFFFF]">
        <p>
          By signing up, you agree to our <a href="#">Terms of Service</a>
          <br /> and <a href="#">Data Processing Agreement</a>
        </p>
        <p className="mt-[40px] ">Already have an account? </p>
      </div>
    </form>
  );
};

export default Register;
