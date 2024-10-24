import { PiBuildingOfficeBold } from "react-icons/pi";
import { MdHome, MdLocationOn, MdPhone } from "react-icons/md";

const Pickdetails = ({ location }) => {
  return (
    <>
      <div className="w-[40rem] h-[30rem] bg-black max-md:w-[23rem]">
        <div className="w-full h-[15%] flex justify-start px-7 items-center">
          <p className="font-semibold text-2xl max-md:text-xl">
            Add Pickup Details
          </p>
        </div>
        <div className="w-full h-[28%] flex justify-center items-center">
          <div className="w-[90%] h-[90%] hover:border-[#f8c534] flex items-center border border-[#0b0c0d] bg-[#0b0c0d] rounded">
            <div className="w-[13%] h-full flex justify-center items-start py-2">
              <PiBuildingOfficeBold size={25} className="text-[#f8c534]" />
            </div>
            <div className="w-[70%] h-full px-2 flex-col flex justify-center gap-2 items-start">
              <p className="font-semibold">Business</p>
              <p className="text-sm text-gray-600 font-medium">
                {location ||
                  "Someshwarpura, Bengaluru, Karnataka, India, 560008"}
              </p>
              <button className="px-6 py-[6px] font-semibold text-black bg-slate-200 rounded-full">
                Edit map
              </button>
            </div>
            <div className="w-[16%] h-full flex justify-center items-center">
              <MdLocationOn size={30} className="text-[#f8c534]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[60%]  flex justify-center flex-col items-center">
        <div className="w-[90%] h-[40%]  flex justify-around items-center">
          <div className="w-[45%] h-[90%]  flex justify-center gap-2 items-start flex-col">
            <label htmlFor="" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span> Flat,floor
            </label>
            <div className="w-full h-[50%] bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534]  flex justify-center gap-2 items-center">
              <MdHome size={30} />
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g 123, Danzo"
                className="w-full h-full bg-transparent outline-none rounded-md "
              />
            </div>
          </div>
          <div className="w-[45%] h-[90%]  flex justify-center gap-2 items-start flex-col">
            <label htmlFor="" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span> Contact Number
            </label>
            <div className="w-full h-[50%]  bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534]  flex justify-center gap-2 items-center">
              <MdPhone size={20} />
              <p className="text-sm font-semibold text-slate-500">+234</p>
              <input
                type=""
                name=""
                id=""
                placeholder="e.g 1234567890"
                className="w-full h-full bg-transparent outline-none rounded-md "
              />
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[40%]  flex justify-around items-center">
          <div className="w-[45%] h-[90%]  flex justify-center gap-2 items-start flex-col">
            <label htmlFor="" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span> Contact Name
            </label>
            <div className="w-full h-[50%] bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534]  flex justify-center gap-2 items-center">
              <MdHome size={30} />
              <input
                type="text"
                name=""
                id=""
                placeholder="e.g 123, Danzo"
                className="w-full h-full bg-transparent outline-none rounded-md "
              />
            </div>
          </div>
          <div className="w-[45%] h-[90%]  flex justify-center gap-2 items-start flex-col">
            <label
              htmlFor=""
              className="font-semibold text-slate-600 max-md:text-center"
            >
              <span className="text-red-500">*</span> Whats your order{" "}
              <span className=" max-md:hidden">(Optional)</span>
            </label>
            <div className="w-full h-[50%]  bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534]  flex justify-center gap-2 items-center">
              <MdPhone size={20} />
              <p className="text-sm font-semibold text-slate-500">+234</p>
              <input
                type=""
                name=""
                id=""
                placeholder="e.g 1234567890"
                className="w-full h-full bg-transparent outline-none rounded-md "
              />
            </div>
          </div>
        </div>
        <div className="w-full h-[30%] flex justify-center items-center">
          <button className=" px-9 rounded-full text-black font-semibold py-2  bg-gray-400">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Pickdetails;
