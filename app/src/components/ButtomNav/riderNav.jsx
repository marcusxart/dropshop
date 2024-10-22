import { LuPackageOpen } from "react-icons/lu";

import { BsBuildingsFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Assuming you are using Next.js

const RiderNav = () => {
  const router = useNavigate();

  const handleNavigation = (path) => {
    router(path);
  };

  return (
    <div className="w-full h-[10vh] bg-[#0b0b0d] fixed bottom-0 flex justify-around items-center text-white shadow-lg z-50">
      {/* Orders */}
      <div
        className="relative flex flex-col items-center justify-around rounded-md cursor-pointer transition duration-300 space-y-2 hover:bg-[#0b0b0d] hover:text-yellow-500 px-4"
        onClick={() => handleNavigation("Orders")}
      >
        <span className="text-xl max-md:text-sm mt-1 capitalize">Orders</span>
        <span className="absolute top-[15px] right-2 w-[23px] h-[23px] bg-red-600 rounded-full text-center text-white flex justify-center items-center">
          6
        </span>
        <BsBuildingsFill size={28} />
      </div>

      {/* Ongoing Orders */}
      <div
        className="relative flex flex-col items-center justify-center space-y-2 cursor-pointer transition duration-300 hover:bg-[#0b0b0d] hover:text-yellow-500 px-4"
        onClick={() => handleNavigation("Ongoing-orders")}
      >
        <span className="text-sm max-md:text-sm mt-1 capitalize">
          Ongoing Orders
        </span>
        <span className="absolute top-[18px] right-9 w-[23px] h-[23px] text-white font-medium bg-red-600 rounded-full flex justify-center items-center">
          20
        </span>
        <RiEBike2Fill size={28} />
      </div>

      {/* Order History */}
      <div
        className="flex flex-col items-center justify-center space-y-2 cursor-pointer transition duration-300 hover:bg-[#0b0b0d] hover:text-yellow-500 px-4"
        onClick={() => handleNavigation("order-history")}
      >
        <span className="text-sm max-md:text-xs mt-1 capitalize">
          Order History
        </span>
        <LuPackageOpen size={28} />
      </div>
    </div>
  );
};

export default RiderNav;
