import classnames from "classnames";

const Card = ({ header = "header", content = "content", img, hover }) => {
  return (
    <div
      className={classnames(
        "border-2 border-[#FFC7274D] border-solid h-[380px] rounded-[10px] flex flex-col gap-[60px] overflow-hidden duration-150",
        { "hover:shadow-card-shadow": hover }
      )}
    >
      <div className="px-[16px] py-[32px] h-[72px] ">
        <h3 className="text-[20px] font-bold mb-[8px] leading-[24px]">
          {header}
        </h3>
        <p className="line_2_ellipsis text-[12px]">{content}</p>
      </div>
      <div className="flex-1">
        <img src={img} alt="" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default Card;
