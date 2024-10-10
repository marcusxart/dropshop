import { useState } from "react";
import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import SendPackagesModal from "../components/Modals/SendPackagesModal";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Delivery");
  const [openModal, setOpenModal] = useState(false);

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

  const reorderedCards = card.sort((a, b) =>
    a.id === selectedOption ? -1 : b.id === selectedOption ? 1 : 0
  );

  const handleCardClick = (id) => {
    setSelectedOption(id);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      setOpenModal(true);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-4">
      {openModal ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
          <div className="relative w-full max-w-md">
            <SendPackagesModal />
            <button
              className="absolute top-2 right-2 border rounded-lg text-white p-1"
              onClick={closeModal}
            >
              <MdOutlineClear size={24} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full text-center mb-8">
            <p className="text-2xl md:text-4xl font-bold">
              I want to{" "}
              <span className="font-bold text-[#f8c534]">
                {selectedOption ? selectedOption : "Delivery"}
              </span>
            </p>
          </div>
          <div className="w-full max-w-md relative h-[400px] md:h-[500px] mb-8">
            {reorderedCards.map((cards, index) => (
              <div
                key={index}
                className={`w-full h-full cursor-pointer rounded-lg flex flex-col justify-center items-center absolute
                transition-all duration-700 ease-in-out transform border p-4
                ${
                  selectedOption === cards.id
                    ? "border-[#f8c534] translate-x-0 scale-100 z-10 bg-black"
                    : "border-transparent bg-[#111214BF] translate-x-[85%] scale-90 opacity-60 z-0"
                }`}
                onClick={() => handleCardClick(cards.id)}
              >
                <div className="w-full flex flex-col gap-2 items-center mb-4">
                  {cards.icon}
                  <h2 className="text-xl md:text-2xl font-bold">
                    {cards.title}
                  </h2>
                </div>
                <div className="w-full text-center mb-4">
                  <p className="text-sm md:text-base">{cards.text}</p>
                </div>
                <div className="w-full flex justify-center">
                  <span className="w-4 h-4 rounded-full bg-gray-400"></span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button
              className={`px-5 py-2 flex justify-center items-center gap-2 rounded-lg font-semibold transition-all
              ${
                selectedOption
                  ? "bg-gray-600 text-white"
                  : "bg-slate-300 text-gray-400"
              }`}
              disabled={!selectedOption}
              onClick={handleConfirm}
            >
              Confirm <FaRegThumbsUp />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
