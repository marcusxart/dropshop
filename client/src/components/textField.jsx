import classnames from "classnames";

const TextField = ({
  placeholder = "",
  required = false,
  onChange,
  value,
  type = "text",
}) => {
  const cn =
    "h-[48px] w-full bg-transparent  shadow-input-border  focus:shadow-input-border-hover outline-none rounded-[8px] placeholder:text-[#F9FCFF80] px-[16px]";
  return (
    <label className="block w-full">
      {type === "textarea" ? (
        <textarea
          className={classnames(cn, {
            "resize-none h-[140px] pt-[12px]": true,
          })}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={cn}
        />
      )}
    </label>
  );
};

export default TextField;
