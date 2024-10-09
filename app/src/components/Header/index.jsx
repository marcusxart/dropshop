import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full h-[14vh] flex justify-end px-9 items-center">
      <div className=" bg-[#111214BF] w-[15%] rounded h-[80%] max-md:w-[60%] max-md:h-[90%] flex justify-center gap-4 items-center">
        <MdLogout size={30} />
        <div className="w-[50px] h-[50px] rounded-full border"></div>
      </div>
    </div>
  );
};

export default Header;
