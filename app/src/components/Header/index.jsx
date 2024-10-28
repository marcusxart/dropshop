import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCustomers } from "../../Global/customerSlice";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Connect to your Socket.IO server

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOnline, setIsOnline] = useState(false);

  // Get customer name from Redux store
  const customer = useSelector((state) => state.customer);
  const customerName = customer?.name || "Unknown User"; // Use "Unknown User" if name is missing

  const HandleLogout = () => {
    dispatch(clearCustomers());
    navigate("/auth/login");
  };

  useEffect(() => {
    console.log("Attempting to connect to socket...");

    socket.on("connect", () => {
      setIsOnline(true);
      console.log("Socket connected:", socket.connected); // Check connection status here
      console.log("Emitting userLogin with name:", customerName);
      socket.emit("userLogin", { name: customerName });
    });

    socket.on("disconnect", () => {
      setIsOnline(false);
      console.log("Socket disconnected."); // Log when disconnected
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [customerName]);

  return (
    <div className="w-full h-[14vh] flex justify-end px-9 items-center">
      <div className="bg-[#111214BF] cursor-pointer w-[15%] rounded h-[80%] max-md:w-[60%] max-md:h-[60%] flex justify-center gap-4 items-center">
        <MdLogout size={30} onClick={HandleLogout} />
        <div
          className="w-[40px] h-[40px] rounded-full border flex justify-center items-center cursor-pointer relative"
          onClick={() => navigate("profile")}
        >
          <FaUser />
          {/* Green online indicator */}
          <span
            className={`absolute top-0 right-0 w-[10px] h-[10px] rounded-full ${
              isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
