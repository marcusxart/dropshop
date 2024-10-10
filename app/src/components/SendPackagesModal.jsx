import { FaRegEdit, FaRegThumbsUp } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md"; // Using location icon for pickup/drop-off points

const SendPackagesModal = () => {
  return (
    <div className="w-[40rem] h-[35rem] bg-black max-md:w-[23rem] rounded flex-col flex justify-around items-center">
      <div className="w-full h-[20%] flex justify-center items-start flex-col px-8">
        <p className="font-semibold text-2xl max-md:text-xl">
          Send Packages in Abuja
        </p>
        <p className="font-medium">Your on-demand local courier</p>
      </div>

      <div className="w-full h-[30%] flex justify-start px-8 items-center">
        {/* Left part for the line and location markers */}
        <div className="w-[10%] h-full flex flex-col justify-center items-center relative">
          <MdLocationOn className="text-red-500 text-3xl" />
          {/* Line connecting pickup and drop-off */}
          <div className="w-[2px] h-[50%] bg-gray-300"></div>
          <MdLocationOn className="text-green-500 text-3xl" />
        </div>

        {/* Right part for the location details */}
        <div className="w-[90%] h-[92%] flex justify-around items-center flex-col max-md:h-[100%]">
          <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center gap-1 items-start">
            <label className="font-semibold text-slate-400">
              Pickup Location <span className="text-red-500">*</span>
            </label>
            <div className="py-1 cursor-pointer text-slate-200 w-full outline-none bg-transparent border-b-2 border-[#f8c534]">
              <p className="font-semibold">Search pickup location</p>
            </div>
          </div>
          <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center items-start">
            <label className="font-semibold text-slate-400">
              Drop Point <span className="text-red-500">*</span>
            </label>
            <div className="text-slate-300 w-full outline-none bg-transparent">
              <p className="max-md:text-sm">
                Kempegowda, Sevashrama, Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[60%] h-[50%] flex justify-center gap-4 items-start flex-col max-md:w-[89%]">
        <div className="w-full h-[20%] cursor-pointer bg-[#1b1b1b] rounded-md flex justify-start px-4 text-slate-400 gap-2 items-center">
          <FaRegEdit size={30} />
          <p className="max-md:text-sm max-md:text-center">
            Any instructions for the delivery partner?
          </p>
        </div>
        <p className="text-[11px]">
          By confirming, I accept this order doesn’t contain illegal/restricted
          items. If illegal/restricted items are found by the delivery partner,
          they may report it to law enforcement authorities.{" "}
          <span>Terms and conditions</span>
        </p>
        <div className="w-full h-[20%] flex justify-start items-center">
          <button className="py-3 px-10 flex justify-center gap-2 items-center text-black font-bold bg-white rounded-full">
            Confirm <FaRegThumbsUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendPackagesModal;
