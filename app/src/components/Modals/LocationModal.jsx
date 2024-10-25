import { useState } from "react";
import Pickdetails from "./Pickdetails";
import SearchModal from "./SearchModal";

const LocationModalSystem = ({ onClose }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showPickupDetails, setShowPickupDetails] = useState(false);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsSearchOpen(false);
    setShowPickupDetails(true);
  };

  const handleBackToSearch = () => {
    setShowPickupDetails(false);
    setIsSearchOpen(true);
  };

  const handleBackToSendModal = () => {
    onClose(); // Close the LocationModalSystem and return to SendPackagesModal
  };
  const onContinue = () => {
    setShowPickupDetails(false);
    setSelectedLocation("");
    onClose(); // Close LocationModalSystem and go back to SendPackagesModal
  };
  return (
    <>
      {/* Custom modal for search modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black text-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button
              onClick={handleBackToSendModal}
              className="absolute  top-16 right-[55rem] font-bold max-md:right-[20rem] text-white hover:text-gray-300 focus:outline-none"
            >
              ← Back
            </button>
            <SearchModal onSelectLocation={handleLocationSelect} />
          </div>
        </div>
      )}

      {/* Custom modal for pickup details modal */}
      {showPickupDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black text-white rounded-lg shadow-lg  max-w-lg w-full relative">
            <button
              onClick={handleBackToSearch}
              className="absolute top-2 left-4 font-bold text-white hover:text-gray-300 focus:outline-none"
            >
              ← Back
            </button>
            <Pickdetails location={selectedLocation} onContinue={onContinue} />
          </div>
        </div>
      )}
    </>
  );
};

export default LocationModalSystem;
