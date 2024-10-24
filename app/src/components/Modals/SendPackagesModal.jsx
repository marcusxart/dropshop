import { useState } from "react";
import { FaRegEdit, FaRegThumbsUp } from "react-icons/fa";
import { MdLocationOn, MdOutlineClear } from "react-icons/md";
import SearchModal from "./SearchModal";

const SendPackagesModal = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isPickup, setIsPickup] = useState(true);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropPointLocation, setDropPointLocation] = useState("");

  const handleOpenSearchModal = (forPickup) => {
    setIsPickup(forPickup);
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const handleSelectLocation = (location) => {
    if (isPickup) {
      setPickupLocation(location);
    } else {
      setDropPointLocation(location);
    }
    handleCloseSearchModal();
  };

  return (
    <div className="w-[40rem] h-[35rem]  bg-black max-md:w-[23rem] rounded-lg flex-col flex justify-around items-center">
      {isSearchModalOpen ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative ">
            <SearchModal onSelectLocation={handleSelectLocation} />
            <button
              className="absolute top-2 right-2 border px-2 rounded-lg py-1 text-white"
              onClick={handleCloseSearchModal}
            >
              <MdOutlineClear size={30} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full h-[20%]  flex justify-center items-start flex-col px-8">
            <p className="font-semibold text-2xl max-md:text-xl">
              Send Packages in Abuja
            </p>
            <p className="font-medium">Your on-demand local courier</p>
          </div>

          <div className="w-full h-[30%] flex justify-start px-8 items-center">
            <div className="w-[10%] h-full flex flex-col justify-center items-center relative">
              <MdLocationOn className="text-red-500 text-3xl" />
              <div className="w-[2px] h-[50%] bg-gray-300"></div>
              <MdLocationOn className="text-green-500 text-3xl" />
            </div>

            <div className="w-[90%] h-[92%] flex justify-around items-center flex-col max-md:h-[100%]">
              <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center gap-1 items-start">
                <label className="font-semibold text-slate-400">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <div
                  className="py-1 cursor-pointer text-slate-200 w-full outline-none bg-transparent border-b-2 border-[#f8c534]"
                  onClick={() => handleOpenSearchModal(true)} // Open search modal for pickup location
                >
                  <p className="font-semibold">
                    {pickupLocation || "Search pickup location"}
                  </p>
                </div>
              </div>

              <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center items-start">
                <label className="font-semibold text-slate-400">
                  Drop Point <span className="text-red-500">*</span>
                </label>
                <div
                  className="py-1 cursor-pointer text-slate-200 w-full outline-none bg-transparent border-b-2 border-[#f8c534]"
                  onClick={() => handleOpenSearchModal(false)} // Open search modal for drop point
                >
                  <p className="font-semibold">
                    {dropPointLocation || "Search drop point"}
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
              By confirming, I accept this order doesn’t contain
              illegal/restricted items. If illegal/restricted items are found by
              the delivery partner, they may report it to law enforcement
              authorities. <span>Terms and conditions</span>
            </p>
            <div className="w-full h-[20%] flex justify-start items-center">
              <button className="py-3 px-10 flex justify-center gap-2 items-center text-black font-bold bg-white rounded-full">
                Confirm <FaRegThumbsUp />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SendPackagesModal;
