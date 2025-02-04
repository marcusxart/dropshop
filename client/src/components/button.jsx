import classnames from "classnames";

const Button = ({
  type,
  styleType = "primary",
  text = "text",
  style,
  icon,
  full = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      type={type}
      className={classnames(
        "px-[16px] flex items-center gap-[8px] font-semibold h-[48px] rounded-[8px] cursor-pointer justify-center btn-icon duration-150 transition-all text-[13px] lg:text-[16px]",
        { "w-full": full },
        { "w-fit": !full },
        {
          "bg-[#AE8100] text-white hover:bg-[#8D6B08] hover:text-[#D3D1D1] btn-primaary ":
            styleType === "primary",
        },
        {
          "bg-[#FFF8E3] btn-secondary  text-[#AE8100] hover:text-[#694E00] hover:bg-[#FFE088]":
            styleType === "secondary",
        }
      )}
    >
      {text}
      {icon && icon}
    </button>
  );
};

export default Button;
