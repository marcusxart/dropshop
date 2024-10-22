import { useState } from "react";
import {
  MdMapsHomeWork,
  MdDeliveryDining,
  MdLocalShipping,
  MdChat,
  MdDashboard,
  MdPeople,
  MdExitToApp,
  MdArrowRight,
} from "react-icons/md";
import { LuPackageOpen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

// Example roles. Replace these with actual state/logic to determine the user role
const role = "rider"; // This could be 'admin', 'customer', or 'rider'

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Menu items for each role
  const AdminMenuItems = [
    { label: "Dashboard", icon: <MdDashboard />, path: "overview" },
    { label: "Riders", icon: <MdDeliveryDining />, path: "all-riders" },
    { label: "Orders", icon: <LuPackageOpen />, path: "all-orders" },
    { label: "Order History", icon: <MdLocalShipping />, path: "all-history" },
    { label: "Customers", icon: <MdPeople />, path: "all-customers" },
    { label: "Logout", icon: <MdExitToApp />, path: "logout" },
  ];

  const CustomerMenuItems = [
    { label: "Home", icon: <MdMapsHomeWork />, path: "home" },
    { label: "Orders", icon: <MdDeliveryDining />, path: "orders" },
    { label: "Order History", icon: <MdLocalShipping />, path: "history" },
    { label: "Customer Service", icon: <MdChat />, path: "door2door" },
    { label: "Logout", icon: <MdExitToApp />, path: "logout" },
  ];

  const RiderMenuItems = [
    { label: "Orders", icon: <MdDeliveryDining />, path: "rider-orders" }, // All orders for rider
    {
      label: "Ongoing Orders",
      icon: <MdLocalShipping />,
      path: "rider-ongoing-orders",
    }, // Ongoing orders
    { label: "History", icon: <LuPackageOpen />, path: "rider-history" }, // Order history
    { label: "Logout", icon: <MdExitToApp />, path: "logout" },
  ];

  // Determine which menu items to show based on role
  const MenuItems =
    role === "admin"
      ? AdminMenuItems
      : role === "customer"
      ? CustomerMenuItems
      : RiderMenuItems; // Assign menu for rider role

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
        {MenuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center mb-4 cursor-pointer rounded-md transition-colors duration-200 ${
              role === "admin" ? "hover:bg-[#f8c324]" : "hover:bg-black"
            }`}
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

export default Sidebar;
