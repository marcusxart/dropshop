import { BiMap } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { setStage } from "../Global/Orderstatus";

const socket = io("http://localhost:5000", { autoConnect: false }); // Set autoConnect to false to manage connection manually

const Orders = () => {
  const dispatch = useDispatch();
  const stage = useSelector((state) => state.OrderStatus.stage);
  console.log(stage);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("updateStage", (data) => {
      dispatch(setStage(data));
      console.log("Order status updated: customer ", data);
    });

    // Clean up socket listeners when component unmounts
    return () => {
      // socket.off("updateStage");
      socket.disconnect();
    };
  }, [socket.id]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg w-[90%] h-[90%] relative max-md:w-[20rem]">
        <div className="w-full h-[20%] flex justify-center gap-1 flex-col items-center">
          <p className="font-semibold text-xs text-slate-400">In progress</p>
          <p className="font-semibold text-2xl text-[#f8c324]">
            Delivering in 30 minutes
          </p>
        </div>
        <div className="w-full h-[20%] flex justify-around items-center">
          <div className="w-[20%] h-[70%] flex flex-col justify-around items-center">
            <p>on the way</p>
            <span className="w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[40%] h-[70%] flex flex-col justify-around items-center">
            <p>picked up</p>
            <span className="w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[20%] h-[70%] flex flex-col justify-around items-center">
            <p>delivered</p>
            <span className="w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[10%] h-[70%] flex justify-around flex-col items-center">
            <p>done</p>
            <span className="w-[5px] h-[5px] rounded-full bg-white"></span>
            <div className="w-[90%] h-[30%] bg-white rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center gap-2 items-center">
          <BiMap size={30} color="#f8c324" />
          <p className="text-sm font-medium">
            Kempegowda, Sevashrama, Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
