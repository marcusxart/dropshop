import { useEffect } from "react";
import { BiMap } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const DeliveryModal = ({ closeModal }) => {
  useEffect(() => {}, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black  p-8 rounded-lg shadow-lg w-[40rem] h-[30rem] relative max-md:w-[20rem]">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white font-bold text-2xl"
        >
          <MdClose size={20} />
        </button>
        <div className="w-full h-[20%] flex justify-center gap-1 flex-col items-center">
          <p className=" font-semibold text-xs text-slate-400">In progress</p>
          <p className=" font-semibold text-2xl text-[#f8c324]">
            Delivering in 30 minutes
          </p>
        </div>
        <div className="w-full h-[20%]  flex justify-around items-center">
          <div className="w-[20%] h-[70%]  flex flex-col justify-around items-center">
            <p>on the way</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[40%] h-[70%]  flex flex-col justify-around items-center">
            <p>picked up</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[20%] h-[70%]  flex flex-col justify-around items-center">
            <p>delivered</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[10%] h-[70%]  flex justify-around flex-col items-center">
            <p>done</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-white"></span>
            <div className="w-[90%] h-[30%] bg-white rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center gap-2 items-center">
          <BiMap size={30} color="#f8c324" />
          <p className=" textsm font-medium">
            {" "}
            Kempegowda, Sevashrama, Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
      <div onClick={closeModal} className="fixed inset-0 "></div>
    </div>
  );
};

export default DeliveryModal;
