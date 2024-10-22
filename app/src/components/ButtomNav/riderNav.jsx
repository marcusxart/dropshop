import { LuPackageOpen } from "react-icons/lu";
import { MdDeliveryDining } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Assuming you are using Next.js

const RiderNav = () => {
  const router = useNavigate();

  const handleNavigation = (path) => {
    router(path);
  };

  return (
    <div className="w-full h-[10vh] bg-black fixed bottom-0 flex justify-around items-center text-white shadow-lg z-50 max-md:h-[8vh]">
      {/* Orders */}
      <div
        className="relative flex flex-col items-center justify-center rounded-md cursor-pointer transition duration-300 hover:bg-[#0b0b0d] hover:text-yellow-500 px-4"
        onClick={() => handleNavigation("Orders")}
      >
        <span className="absolute top-[-12px] right-2 w-[23px] h-[23px] bg-red-600 rounded-full text-center text-white flex justify-center items-center">
          6
        </span>
        <MdDeliveryDining size={28} />
        <span className="text-sm max-md:text-xs mt-1 capitalize">Orders</span>
      </div>

      {/* Ongoing Orders */}
      <div
        className="relative flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:bg-[#0b0b0d] hover:text-yellow-500 px-4"
        onClick={() => handleNavigation("Ongoing-orders")}
      >
        <span className="absolute top-[-12px] right-7 w-[23px] h-[23px] text-white font-medium bg-red-600 rounded-full flex justify-center items-center">
          20
        </span>
        <RiEBike2Fill size={28} />
        <span className="text-sm max-md:text-xs mt-1 capitalize">
          Ongoing Orders
        </span>
      </div>

      {/* Order History */}
      <div
        className="flex flex-col items-center justify-center cursor-pointer transition duration-300 hover:bg-[#0b0b0d] hover:text-yellow-500 px-4"
        onClick={() => handleNavigation("order-history")}
      >
        <LuPackageOpen size={28} />
        <span className="text-sm max-md:text-xs mt-1 capitalize">
          Order History
        </span>
      </div>
    </div>
  );
};

export default RiderNav;
