import classnames from "classnames";

const Card = ({
  header = "header",
  content = "content",
  img,
  hover,
  rightText,
}) => {
  return (
    <div
      className={classnames(
        "border-2 border-[#FFC7274D] border-solid h-[350px] lg:h-[540px] rounded-[16px] flex flex-col gap-[60px] max-w-[464px] overflow-hidden duration-150",
        {
          "hover:shadow-card-shadow": hover,
          "text-left lg:text-right": rightText,
        }
      )}
    >
      <div className="px-[16px] py-[16px] lg:py-[32px] h-[132px] ">
        <h3 className="text-[18px] lg:text-[24px] font-black lg:mb-[8px] leading-[24px] gradient-grey">
          {header}
        </h3>
        <p className="line_3_ellipsis text-[14px] lg:text-[16px]">{content}</p>
      </div>
      <div className="flex-1">
        <img
          src={img}
          alt=""
          className="object-cover bg-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default Card;
