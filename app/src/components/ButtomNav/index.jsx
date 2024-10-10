import {
  MdChat,
  MdDeliveryDining,
  MdLocalShipping,
  MdMapsHomeWork,
} from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Assuming you are using Next.js

const ButtomNav = () => {
  const router = useNavigate();

  const MenuItems = [
    {
      icon: <MdMapsHomeWork size={28} />,
      path: "home",
    },
    {
      icon: <MdDeliveryDining size={28} />,
      path: "orders",
    },
    {
      icon: <MdLocalShipping size={28} />,
      path: "history",
    },
    {
      icon: <MdChat size={28} />,
      path: "door2door",
    },
  ];

  const handleNavigation = (path) => {
    router(path);
  };

  return (
    <div className="w-full h-[10vh] bg-black fixed bottom-0 flex justify-around items-center text-white shadow-lg z-50 max-md:h-[8vh]">
      {MenuItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer transition duration-300 hover:text-yellow-500"
          onClick={() => handleNavigation(item.path)} // Navigate on click
        >
          {item.icon}
          <span className="text-sm max-md:text-xs mt-1 capitalize">
            {item.path.replace("/", "")}
          </span>{" "}
          {/* Display path name */}
        </div>
      ))}
    </div>
  );
};

export default ButtomNav;
