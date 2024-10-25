import { useState, useEffect } from "react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { MdLocationOn } from "react-icons/md";

const Pickdetails = ({ location, onContinue }) => {
  const selectedOption = localStorage.getItem("selectedOption");

  const [price, setPrice] = useState("");
  const [type, setType] = useState(selectedOption || "Delivery");
  const [from, setFrom] = useState(location || "");
  const [to, setTo] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState("");

  const handleSaveToLocalStorage = () => {
    const orderData = { price, type, from, to, number, details };
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Call onContinue to close the modal and return to SendPackagesModal
    if (onContinue) onContinue();
  };

  useEffect(() => {
    setType(selectedOption);
    setFrom(location);
  }, [selectedOption, location]);

  return (
    <div className="w-full h-[35rem] bg-[#0b0b0f] max-md:w-[23rem]">
      <div className="w-full h-[20%] flex justify-start px-7 items-center">
        <p className="font-semibold text-2xl max-md:text-xl">
          Add {type} Details
        </p>
      </div>

      <div className="w-full h-[28%] flex justify-center items-center">
        <div className="w-[90%] h-[90%] hover:border-[#f8c534] flex items-center border border-[#0b0c0d] bg-[#0b0c0d] rounded">
          <div className="w-[13%] h-full flex justify-center items-start py-2">
            <PiBuildingOfficeBold size={25} className="text-[#f8c534]" />
          </div>
          <div className="w-[70%] h-full px-2 flex-col flex justify-center gap-2 items-start">
            <p className="font-semibold">Business</p>
            <p className="text-sm text-gray-600 font-medium">{from}</p>
            <button className="px-6 py-[6px] font-semibold text-black bg-slate-200 rounded-full">
              Edit map
            </button>
          </div>
          <div className="w-[16%] h-full flex justify-center items-center">
            <MdLocationOn size={30} className="text-[#f8c534]" />
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] flex justify-center flex-col items-center">
        <div className="w-[90%] h-[40%] flex justify-around items-center">
          <div className="w-[45%] h-[90%] flex justify-center gap-2 items-start flex-col">
            <label htmlFor="to" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span>{" "}
              {type === "Delivery" ? "Pickup" : "Delivery"} Address
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter Address"
              className="w-full h-[50%] bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534] outline-none"
            />
          </div>

          <div className="w-[45%] h-[90%] flex justify-center gap-2 items-start flex-col">
            <label htmlFor="number" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span> Contact Number
            </label>
            <input
              type="tel"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="e.g. 1234567890"
              className="w-full h-[50%] bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534] outline-none"
            />
          </div>
        </div>

        <div className="w-[90%] h-[40%] flex justify-around items-center">
          <div className="w-[45%] h-[90%] flex justify-center gap-2 items-start flex-col">
            <label htmlFor="details" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span> Order Details
            </label>
            <input
              type="text"
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Describe your order"
              className="w-full h-[50%] bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534] outline-none"
            />
          </div>

          <div className="w-[45%] h-[90%] flex justify-center gap-2 items-start flex-col">
            <label htmlFor="price" className="font-semibold text-slate-600">
              <span className="text-red-500">*</span> Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 100"
              className="w-full h-[50%] bg-[#0b0c0d] border border-[#0b0c0d] rounded-md px-3 hover:border-[#f8c534] outline-none"
            />
          </div>
        </div>

        <div className="w-full h-[30%] flex justify-center items-center">
          <button
            onClick={handleSaveToLocalStorage}
            className="px-9 rounded-full text-black font-semibold py-2 bg-gray-400"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pickdetails;
