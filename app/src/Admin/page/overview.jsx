import { useEffect } from "react";
import { MdDeliveryDining, MdLocalOffer, MdPeople } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { setAdminData } from "../../Global/adminSlic";

const OverView = () => {
  const AdminData = useSelector((state) => state.admin.adminData);
  console.log(AdminData);

  const dispatch = useDispatch();

  useEffect(() => {
    const getAdminData = async () => {
      const toastLoading = toast.loading("Please wait....");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/salesDashboard"
        );
        dispatch(setAdminData(response.data));
      } catch (erro) {
        console.log(erro);
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    getAdminData();
  }, []);

  const cards = [
    {
      header: "Total Orders",
      value: AdminData?.totalOrder, // fallback to 0 if undefined
      icon: <MdLocalOffer size={24} />,
      color: "bg-blue-500",
    },
    {
      header: "Amount Made",
      value: `₦${AdminData?.amount_made ?? 0}`, // use amount_made from AdminData
      icon: <TbCurrencyNaira size={24} />,
      color: "bg-green-500",
    },
    {
      header: "Total Riders",
      value: AdminData?.total_riders ?? 0, // use total_riders from AdminData
      icon: <MdDeliveryDining size={24} />,
      color: "bg-yellow-500",
    },
    {
      header: "Total Customers",
      value: AdminData?.total_customers ?? 0, // use total_customers from AdminData
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
