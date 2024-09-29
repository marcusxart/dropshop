const TextField = ({ placeholder = "", required = false, onChange, value }) => {
  return (
    <label className="block w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={
          "h-[48px] w-full bg-transparent  shadow-input-border  focus:shadow-input-border-hover outline-none rounded-[8px] placeholder:text-[#F9FCFF80] px-[16px]"
        }
      />
    </label>
  );
};

export default TextField;
