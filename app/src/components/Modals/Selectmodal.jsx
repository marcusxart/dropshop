import { useEffect } from "react";
import { MdClear, MdFileCopy, MdLocationOn, MdMap } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import facecard from "../../assets/Customer.jpeg";
import { toast } from "react-hot-toast";
import { setRiderStatus } from "../../Global/rideSlic";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Selectmodal = ({ isOpen, onClose, order }) => {
  const dispatch = useDispatch();
  const rider = useSelector((state) => state.rider.rider); // Specify state part for useSelector

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("updateStage", (data) => {
      dispatch(setRiderStatus(data.orderStatus));
      toast.success(`Order status updated: ${data.status}`);
    });

    return () => {
      socket.off("updateStage");
      socket.disconnect();
    };
  }, [dispatch]);

  const handleUpdateStatus = async () => {
    const toastLoading = toast.loading("Please wait...");

    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateOrder/${order.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${rider.token}`,
          },
        }
      );
      toast.success("Status updated successfully");
      dispatch(setRiderStatus(response.data));

      if (socket.connected) {
        socket.on("updateStage", { stage: 2, status: "in progress" });
        console.log(`Status Update: ${response.data.customer}`);
      }

      onClose();
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating status");
    } finally {
      toast.dismiss(toastLoading);
    }
  };

  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-3 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#0b0b0d] p-2 rounded-lg shadow-lg w-[22rem] h-screen text-slate-400">
        <div className="flex justify-end mb-3">
          <button
            onClick={onClose}
            className="border border-red-500 text-white px-4 py-2 rounded-md"
          >
            <MdClear />
          </button>
        </div>
        <div className="w-full h-[17%] flex justify-center items-center">
          <div className="w-[50%] h-full flex flex-col justify-around items-start px-2">
            <p className="font-extrabold text-xl text-gray-500">
              {order.customer}
            </p>
            <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center">
              <img
                src={facecard}
                alt="Customer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-[50%] h-full flex justify-around items-end flex-col">
            <p className="text-gray-400 font-semibold text-xl">{order.type}</p>
            <p className="px-4 py-1 text-yellow-300 bg-yellow-900 rounded">
              {order.status}
            </p>
          </div>
        </div>
        <div className="w-full h-[7%] flex justify-end gap-2 px-2 items-center">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#292929]">
            <MdLocationOn />
          </div>
          <span className="font-bold text-[#f8c324]">From |</span>
          <p>{order.from}</p>
        </div>
        <div className="w-full h-[7%] flex justify-end gap-2 px-2 items-center">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#292929]">
            <MdMap />
          </div>
          <span className="font-bold text-[#f8c324]">To |</span>
          <p>{order.to}</p>
        </div>
        <div className="w-full h-[7%] flex justify-end gap-2 px-2 items-center">
          <p>{new Date(order.createdAt).toLocaleString()}</p>
        </div>
        <div className="w-full h-[7%] flex justify-end gap-2 px-2 items-center">
          <p>₦ {order.price}</p>
        </div>
        <div className="w-full h-[7%] flex justify-end gap-2 px-2 items-center">
          <p>{order.details}</p>
        </div>
        <div className="w-full h-[7%] flex justify-end gap-2 px-2 items-center">
          <MdFileCopy /> <p>{order.number}</p>
        </div>
        <div className="w-full h-[25%] flex justify-around items-center flex-col">
          <div className="w-[90%] h-[40%] bg-[#292929] text-slate-400 gap-2 rounded flex justify-center items-center">
            <FaRegEdit size={30} />
            <p className="text-sm font-semibold">Edit Order</p>
          </div>
          <div className="w-[90%] h-[40%] flex justify-center items-center">
            <button
              className="px-20 rounded text-black font-semibold py-2 bg-slate-200"
              onClick={handleUpdateStatus}
            >
              I have Picked Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectmodal;
