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
    setOpenSidebar(!OpenSidebar);
  };

  const MenuItems = [
    {
      label: "Home",
      icon: <MdMapsHomeWork />,
      path: "overview",
    },
    {
      label: "Orders",
      icon: <MdDeliveryDining />,
      path: "history",
    },
    {
      label: "Order History",
      icon: <MdLocalShipping />,
      path: "transbank",
    },
    {
      label: "Customer Service",
      icon: <MdChat />,
      path: "door2door",
    },
  ];

  return (
    <div className="w-[17rem]  h-full flex justify-center items-center">
      <div className=" w-[20%] h-[90%]  flex-auto justify-center flex items-center  px-2 py-3">
        <ul className=" w-[80%] h-[70%]  flex justify-around flex-col  items-start relative  bg-black rounded-md">
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() =>
                item.action ? item.action() : handleNavigation(item.path)
              }
            >
              <div className="flex items-center text-sm hover:bg-blue-600 px-3 py-2 rounded-md w-full transition-all duration-200">
                <span className="text-xl">{item.icon}</span>
                <span className="ml-2">{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
        <div
          className="w-[2%] h-[6%] bg-black absolute top-[7.6rem] left-56 flex justify-center items-center  rounded cursor-pointer"
          onClick={HandleSideMenu}
        >
          {" "}
          <MdArrowRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
