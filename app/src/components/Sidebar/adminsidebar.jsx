import {
  MdDashboard,
  MdDeliveryDining,
  // MdLocalShipping,
  MdPeople,
  MdExitToApp,
  MdArrowRight,
} from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const AdminMenuItems = [
    { label: "Dashboard", icon: <MdDashboard />, path: "overview" },
    { label: "Riders", icon: <MdDeliveryDining />, path: "all-riders" },
    { label: "Orders", icon: <LuPackageOpen />, path: "all-orders" },
    // { label: "Order History", icon: <MdLocalShipping />, path: "all-history" },
    { label: "Customers", icon: <MdPeople />, path: "all-customers" },
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
        {AdminMenuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 cursor-pointer rounded-md transition-colors duration-200 hover:bg-[#f8c324]`}
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

export default AdminSidebar;
