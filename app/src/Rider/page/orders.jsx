import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import faccard from "../../assets/Customer.jpeg";
import CallModal from "../../components/Modals/CallModal";
import { MdClear } from "react-icons/md";
import unavailable from "../../assets/unavailable.svg";

const RiderOrders = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [openModal, setOpenModal] = useState(false); // Track modal state

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const handleAcceptClick = () => {
    setOpenModal(true); // Open the modal when "Accept" is clicked
  };

  // Example data for orders (you can replace this with real data later)
  const orders = [
    { id: 1, description: "Order #1", status: "pending" },
    { id: 2, description: "Order #2", status: "pending" },
    { id: 3, description: "Order #3", status: "pending" },
    { id: 4, description: "Order #4", status: "pending" },
  ];

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[15%] flex justify-around items-center ">
        {/* Rider Info */}
        <div className="w-[50%] h-full flex items-center">
          <div className="w-[55px] h-[55px] bg-purple-500 rounded-full"></div>
          <div className="px-2">
            <p className="font-semibold text-lg">Michael Jordan</p>
            <p
              className={`text-sm ${
                isAvailable ? "text-green-500" : "text-gray-500"
              }`}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="w-[40%] flex justify-center items-center">
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isAvailable}
              onChange={toggleAvailability}
            />
            <div className="w-12 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
          </label>
        </div>
      </div>

      {/* Conditionally Render Orders or Unavailable Image */}
      <div className="w-full h-[10%] flex justify-center items-center">
        <p className="font-semibold text-xl">
          Available Orders ({isAvailable ? orders.length : 0})
        </p>
      </div>
      {isAvailable ? (
        <div className="w-full h-[80%]">
          <div className="w-full h-[70rem] space-y-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide flex flex-col items-center py-2">
            {orders.map((order) => (
              <div
                key={order.id}
                className="w-[90%] h-[7rem] bg-[#1b1b1b] border border-[#f8c324] flex items-center justify-around rounded-lg"
              >
                <div className="w-[50%] h-full px-1 flex justify-around items-center">
                  <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-purple-700">
                    <img
                      src={faccard}
                      alt=""
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[70%] h-[90%] flex-col flex justify-around items-center">
                    <p className="text-lg font-medium">Zain Dator</p>
                    <div className="w-full h-[10%] text-green-400 flex justify-center gap-2 items-center">
                      <FaPhoneAlt size={15} />
                      <p className="text-xs">08159701004</p>
                    </div>
                    <button
                      className="px-4 py-1 cursor-pointer font-bold text-sm bg-[#292929] rounded-full"
                      onClick={handleAcceptClick} // Open modal when clicked
                    >
                      Accept
                    </button>
                  </div>
                </div>
                <div className="w-[50%] h-full flex justify-center px-2 items-end flex-col">
                  <p>Pickup</p>
                  <div className="w-full h-[40%] flex justify-center items-center">
                    <p className="text-xs font-bold text-[#f8c324]">From | </p>
                    <p className="text-xs font-bold"> 89 Tamunoemi Street</p>
                  </div>
                  <div className="w-full h-[40%] flex justify-center items-center">
                    <p className="font-bold text-[#f8c324]">To |</p>
                    <p className="text-xs font-bold">62 Ayobami Street</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-[30rem] flex justify-center items-center">
          <img src={unavailable} alt="unavailable" className="w-[30%]" />
        </div>
      )}

      {/* Call Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative rounded-md  w-[20rem] h-[30rem]">
            <button
              className="absolute top-2  right-2 text-gray-50 rounded-md px-2 py-1 border-red-500 border"
              onClick={() => setOpenModal(false)} // Close modal on click
            >
              <MdClear size={30} />
            </button>
            <CallModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default RiderOrders;
