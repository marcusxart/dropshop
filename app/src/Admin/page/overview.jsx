import { MdDeliveryDining, MdLocalOffer, MdPeople } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";

const OverView = () => {
  const cards = [
    {
      header: "Total Orders",
      value: 123456,
      icon: <MdLocalOffer size={24} />,
      color: "bg-blue-500",
    },
    {
      header: "Amount Made",
      value: "₦12,345,678",
      icon: <TbCurrencyNaira size={24} />,
      color: "bg-green-500",
    },
    {
      header: "Total Riders",
      value: 987654,
      icon: <MdDeliveryDining size={24} />,
      color: "bg-yellow-500",
    },
    {
      header: "Total Customers",
      value: 654321,
      icon: <MdPeople size={24} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="w-full min-h-screen  flex justify-center items-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md text-white flex items-center justify-between bg-[#0b0b0d] `}
          >
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-[#f8c314]">
                {card.header}
              </p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
            <div className="text-3xl">{card.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverView;
