import { useState } from "react";
import {
  MdMapsHomeWork,
  MdDeliveryDining,
  MdLocalShipping,
  MdChat,
  MdArrowRight,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [OpenSidebar, setOpenSidebar] = useState(true);

  // Handle menu item click
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the provided path
  };

  const HandleSideMenu = () => {
    setOpenSidebar(!OpenSidebar); // Toggle sidebar state
  };

  const MenuItems = [
    {
      label: "Home",
      icon: <MdMapsHomeWork />,
      path: "home",
    },
    {
      label: "Orders",
      icon: <MdDeliveryDining />,
      path: "orders",
    },
    {
      label: "Order History",
      icon: <MdLocalShipping />,
      path: "history",
    },
    {
      label: "Customer Service",
      icon: <MdChat />,
      path: "door2door",
    },
  ];

  return (
    <div className="relative w-[17rem] h-full flex justify-center items-center">
      {/* Toggle Button above the Sidebar */}

      {/* Sidebar container */}
      <div
        className={`transition-all duration-300 ${
          OpenSidebar ? "w-[20%]" : "w-[5%]"
        } h-[90%] flex-auto justify-center flex items-center px-2 py-3`}
      >
        <div
          className="absolute top-32 left-[90%] transform -translate-x-1/2 bg-gray-800 p-2 rounded-full cursor-pointer z-10"
          onClick={HandleSideMenu}
        >
          <MdArrowRight
            size={30}
            className={`text-white transition-transform duration-300 ${
              OpenSidebar ? "" : "rotate-180"
            }`}
          />
        </div>
        <ul
          className={`transition-all duration-300 ${
            OpenSidebar ? "w-[80%]" : "w-[20%]"
          } h-[70%] flex justify-center flex-col relative bg-[#111214BF] rounded-md`}
        >
          {/* Menu items */}
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-full h-full cursor-pointer"
              onClick={() =>
                item.action ? item.action() : handleNavigation(item.path)
              }
            >
              <div className="flex items-center justify-center text-sm hover:bg-blue-600 px-3 py-2 rounded-md w-full transition-all duration-200">
                <span className="text-xl">{item.icon}</span>
                {OpenSidebar && (
                  <span className="ml-2 font-semibold">{item.label}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
