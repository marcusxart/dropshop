import {
  MdMapsHomeWork,
  MdDeliveryDining,
  MdLocalShipping,
  MdChat,
  MdExitToApp,
  MdArrowRight,
} from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const CustomerMenuItems = [
    { label: "Home", icon: <MdMapsHomeWork />, path: "home" },
    { label: "On-Going Order", icon: <MdDeliveryDining />, path: "orders" },
    { label: "Order History", icon: <MdLocalShipping />, path: "history" },
    { label: "Customer Service", icon: <MdChat />, path: "door2door" },
    { label: "Logout", icon: <MdExitToApp />, path: "logout" },
  ];

  return (
    <div
      className={`relative h-screen bg-[#111214BF] transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div
        className="absolute top-4 -right-3 bg-gray-800 rounded-full p-1 cursor-pointer"
        onClick={toggleSidebar}
      >
        <MdArrowRight
          size={24}
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className="flex flex-col h-full pt-16 px-4">
        {CustomerMenuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 cursor-pointer rounded-md transition-colors duration-200 hover:bg-black`}
            onClick={() => handleNavigation(item.path)}
          >
            <div className="p-2 rounded-md">
              <span className="text-2xl text-white">{item.icon}</span>
            </div>
            {isOpen && (
              <span className="ml-2 text-white font-semibold">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSidebar;
