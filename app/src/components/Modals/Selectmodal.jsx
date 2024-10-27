import { MdClear, MdFileCopy, MdLocationOn, MdMap } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import facecard from "../../assets/Customer.jpeg";
// import { useSelector } from "react-redux";

const Selectmodal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Return null if modal is not open

  // const onGoing = useSelector((state) => state.rider.riderOngoingOrdering);

  return (
    <div className="fixed inset-3 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-[#0b0b0d] p-2 rounded-lg shadow-lg w-[22rem] h-screen text-slate-400">
        <div className="flex justify-end mb-3">
          <button
            onClick={onClose}
            className=" border border-red-500 text-white px-4 py-2 rounded-md"
          >
            <MdClear />
          </button>
        </div>
        <div className="w-full h-[17%] flex justify-center items-center">
          <div className="w-[50%] h-full flex flex-col justify-around items-start px-2">
            <p className=" font-extrabold text-xl text-gray-500">
              {/* {onGoing.name} */}
            </p>
            <div className="w-[50px] h-[50px]  rounded-full flex justify-center items-center">
              <img
                src={facecard}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="w-[50%] h-full  flex justify-around items-end flex-col">
            <p className=" text-gray-400 font-semibold text-xl">PickUp</p>
            <p className=" px-4 py-1 text-yellow-300 bg-yellow-900 rounded ">
              In process
            </p>
          </div>
        </div>
        <div className="w-full h-[7%]  flex justify-end gap-2 px-2 items-center">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#292929]">
            <MdLocationOn />
          </div>{" "}
          <span className=" font-bold text-[#f8c324]">From |</span>
          <p>89 Tamunoemi Street</p>
        </div>
        <div className="w-full h-[7%]  flex justify-end gap-2 px-2 items-center">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-[#292929]">
            <MdMap />
          </div>{" "}
          <span className=" font-bold text-[#f8c324]">To |</span>
          <p>89 Tamunoemi Street</p>
        </div>
        <div className="w-full h-[7%]  flex justify-end gap-2 px-2 items-center">
          <p>10.26.2024</p>
        </div>
        <div className="w-full h-[7%]  flex justify-end gap-2 px-2 items-center">
          <p>₦ 2,000.00</p>
        </div>
        <div className="w-full h-[7%]  flex justify-end gap-2 px-2 items-center">
          <p>Iphone 16</p>
        </div>
        <div className="w-full h-[7%]  flex justify-end gap-2 px-2 items-center">
          <MdFileCopy /> <p>08159701004</p>
        </div>
        <div className="w-full h-[25%]  flex justify-around items-center flex-col">
          <div className=" w-[90%] h-[40%] bg-[#292929] text-slate-400 gap-2 rounded flex justify-center items-center">
            <FaRegEdit size={30} />
            <p className=" text-sm font-semibold">Collect balance of 5k</p>
          </div>
          <div className=" w-[90%] h-[40%]  flex justify-center items-center">
            <button className=" px-20 rounded  text-black font-semibold py-2 bg-slate-200">
              I have Picked Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectmodal;
