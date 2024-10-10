import { useState } from "react";
import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import SendPackagesModal from "../components/SendPackagesModal"; // Import the modal component

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Delivery");
  const [openModal, setOpenModal] = useState(false); // State for modal visibility

  const card = [
    {
      id: "Pick Up",
      icon: <GiCardPickup className="text-[#f8c534]" size={40} />,
      title: "Pick Up",
      text: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: "Delivery",
      icon: <TbTruckDelivery className="text-[#f8c534]" size={40} />,
      title: "Delivery",
      text: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  // Reorder the card array based on the selected option
  const reorderedCards = card.sort((a, b) =>
    a.id === selectedOption ? -1 : b.id === selectedOption ? 1 : 0
  );

  const handleCardClick = (id) => {
    setSelectedOption(id); // Set the selected option when a card is clicked
  };

  const handleConfirm = () => {
    if (selectedOption) {
      setOpenModal(true); // Open the modal when confirm is clicked
    }
  };

  const closeModal = () => {
    setOpenModal(false); // Close the modal
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[90%] h-[15%] flex justify-center items-center">
        <p className="text-4xl font-bold">
          I want to{" "}
          <span className="font-bold text-[#f8c534]">
            {selectedOption ? selectedOption : "Delivery"} {/* Dynamic text */}
          </span>
        </p>
      </div>
      <div className="w-[90%] h-[80%] flex flex-col items-center max-md:w-[100%]">
        <div className="w-[80%] h-[80%] flex justify-around flex-wrap items-center max-md:w-[100%] relative">
          {reorderedCards.map((cards, index) => (
            <div
              key={index}
              className={`w-[40%] h-[80%] cursor-pointer rounded-lg flex flex-col justify-center items-center absolute
                transition-all duration-700 transform border 
                ${
                  selectedOption === cards.id
                    ? "border-[#f8c534] translate-x-[-40%] bg-[#111214BF] z-10" // Selected card styling
                    : "border-transparent bg-black z-0 translate-x-[70%]" // Non-selected cards
                }`} // Conditionally apply border and background
              onClick={() => handleCardClick(cards.id)} // Handle click event
            >
              <div className="w-full h-[50%] flex flex-col gap-2 justify-center items-center">
                {cards.icon}
                <h2 className="text-2xl font-bold">{cards.title}</h2>
              </div>
              <div className="w-full h-[30%] flex justify-center items-center text-center">
                <p>{cards.text}</p>
              </div>
              <div className="w-full h-[20%] flex justify-center items-center">
                <span className="w-[20px] h-[20px] rounded-full bg-gray-400"></span>
              </div>
            </div>
          ))}
        </div>

        <div className="w-[80%] h-[20%] flex justify-center items-center">
          <button
            className={`px-7 py-2 flex justify-center items-center gap-2 rounded-lg font-semibold transition-all
              ${
                selectedOption
                  ? "bg-gray-600 text-gray-800"
                  : "bg-slate-300 text-gray-400"
              }`} // Conditionally change button color
            disabled={!selectedOption} // Disable button if no option is selected
            onClick={handleConfirm} // Open modal on confirm click
          >
            Confirm <FaRegThumbsUp />
          </button>
        </div>
      </div>

      {openModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <SendPackagesModal />
            <button
              className="absolute top-2 right-2 text-white"
              onClick={closeModal} // Close modal on click
            >
              <MdOutlineClear size={30} /> {/* Close button */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
