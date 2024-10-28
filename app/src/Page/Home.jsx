import { useState, useEffect } from "react";
import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineClear } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import SendPackagesModal from "../components/Modals/SendPackagesModal";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Delivery");
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    // Check screen size on load and resize events
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true for mobile screens
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleCardClick = (id) => {
    setSelectedOption(id);
  };

  const handleConfirm = () => {
    if (selectedOption) {
      setOpenModal(true);
      localStorage.setItem("selectedOption", selectedOption);
    }
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center max-md:h-[70rem]">
      {openModal ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <SendPackagesModal />
            <button
              className="absolute top-4 right-5 border rounded-lg text-white"
              onClick={closeModal}
            >
              <MdOutlineClear size={30} />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="w-[90%] h-[15%] flex justify-center items-center">
            <p className="text-4xl font-bold">
              I want to{" "}
              <span className="font-bold text-[#f8c534]">
                {selectedOption ? selectedOption : "Delivery"}
              </span>
            </p>
          </div>
          <div className="w-[90%] h-[80%]   flex flex-col items-center max-md:w-[100%]">
            {isMobile ? (
              <div className="w-full h-full flex  gap-4 flex-col items-center">
                {card.map((cards, index) => (
                  <div
                    key={index}
                    className={`w-full h-[80%] px-2 cursor-pointer rounded-lg flex flex-col justify-center items-center border
                    ${
                      selectedOption === cards.id
                        ? "border-[#f8c534] bg-black"
                        : "bg-[#111214BF] opacity-60"
                    }
                  `}
                    onClick={() => handleCardClick(cards.id)}
                  >
                    <div className="w-full h-[50%] flex flex-col gap-2 justify-center items-center">
                      {cards.icon}
                      <h2 className="text-2xl font-bold">{cards.title}</h2>
                    </div>
                    <div className="w-full h-[30%] flex justify-center items-center text-center">
                      <p>{cards.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Display cards in desktop view
              <div className="w-[80%] h-[80%] flex justify-around flex-wrap items-center max-md:w-[100%]">
                {card.map((cards, index) => (
                  <div
                    key={index}
                    className={`w-[40%] h-[80%] px-2 cursor-pointer rounded-lg flex flex-col justify-center items-center
                    ${
                      selectedOption === cards.id
                        ? "border-[#f8c534] bg-black scale-110"
                        : "bg-[#111214BF] opacity-60"
                    }
                  `}
                    onClick={() => handleCardClick(cards.id)}
                  >
                    <div className="w-full h-[50%] flex flex-col gap-2 justify-center items-center">
                      {cards.icon}
                      <h2 className="text-2xl font-bold">{cards.title}</h2>
                    </div>
                    <div className="w-full h-[30%] flex justify-center items-center text-center">
                      <p>{cards.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="w-[80%] h-[20%] flex justify-center items-center">
              <button
                className={`px-7 py-2 flex justify-center items-center gap-2 rounded-lg font-semibold
                ${
                  selectedOption
                    ? "bg-gray-200 text-gray-800"
                    : "bg-slate-300 text-gray-400"
                }
              `}
                disabled={!selectedOption}
                onClick={handleConfirm}
              >
                Confirm <FaRegThumbsUp />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
