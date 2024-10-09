import { GiCardPickup } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa";

const Home = () => {
  const card = [
    {
      icon: <GiCardPickup />,
      title: "Pick Up",
      text: "Lorem ipsum dolor sitamet consectetur.Lorem ipsum dolor sitamet consectetur.",
    },
    {
      icon: <TbTruckDelivery />,
      title: "Delivery",
      text: "Lorem ipsum dolor sitamet consectetur.Lorem ipsum dolor sitamet consectetur.",
    },
  ];

  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center">
      <div className="w-[90%] h-[15%] flex justify-center items-center">
        <p className=" text-4xl font-bold">
          I want to <span className=" font-bold text-[#f8c534]">Pick Up</span>{" "}
        </p>
      </div>
      <div className="w-[90%] h-[80%] flex justify-around flex-col items-center max-md:w-[100%]">
        <div className="w-[80%] h-[80%] bg-yellow-300 flex justify-around items-center max-md:w-[100%]">
          {card.map((cards, index) => (
            <div
              className="w-[40%] h-[80%] bg-pink-400 rounded"
              key={index}
            ></div>
          ))}
        </div>
        <div className="w-[80%] h-[20%] bg-green-400 flex justify-center items-center">
          <button className="px-7 py-2 flex justify-center items-center gap-2 bg-slate-300 rounded text-gray-400 font-semibold">
            Confirm <FaRegThumbsUp />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
