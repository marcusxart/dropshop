import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import faccard from "../../assets/Customer.jpeg";
import CallModal from "../../components/Modals/CallModal";
import { MdClear } from "react-icons/md";
import unavailable from "../../assets/unavailable.svg";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
import { setRiderOrders } from "../../Global/rideSlic";

const RiderOrders = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedOrderNumber, setSelectedOrderNumber] = useState(null);
  const [selectedOrderName, setSelectedOrderName] = useState(null);

  const riderOrder = useSelector((state) => state.rider.riderOrders);
  const riderData = useSelector((state) => state.rider.rider);

  const toggleAvailability = () => {
    setIsAvailable(!isAvailable);
  };

  const handleAcceptClick = (orderId, orderNumber, orderName) => {
    setSelectedOrderId(orderId);
    setSelectedOrderNumber(orderNumber);
    setSelectedOrderName(orderName);
    setOpenModal(true);
  };

  const headers = {
    Authorization: `Bearer ${riderData.token}`,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const getPendingOrder = async () => {
      const toastLoading = toast.loading("Please wait...");

      try {
        const response = await axios.get(
          "https://dropshop-server.onrender.com/api/getPendingOrders",
          { headers }
        );
        toast.success("Orders fetched successfully");
        dispatch(setRiderOrders(response.data));
      } catch (err) {
        toast.error(err.response?.data?.message || "Data fetch error");
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    getPendingOrder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[15%] flex justify-around items-center ">
        {/* Rider Info */}
        <div className="w-[50%] h-full flex items-center">
          <div className="w-[55px] h-[55px] bg-purple-500 rounded-full"></div>
          <div className="px-2">
            <p className="font-semibold text-lg">{riderData.name}</p>
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
          Available Orders ({isAvailable ? riderOrder.length : 0})
        </p>
      </div>
      {isAvailable ? (
        <div className="w-full h-[80%]">
          <div className="w-full h-screen max-md:h-[70rem] space-y-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-hide flex flex-col items-center py-2">
            {riderOrder.map((order) => (
              <div
                key={order.id}
                className="w-[90%] h-[8.6rem] bg-[#1b1b1b] border border-[#f8c324] flex items-center justify-around rounded-lg"
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
                    <p className="text-lg font-medium text-center">
                      {order.customer}
                    </p>
                    <div className="w-full h-[10%] text-green-400 flex justify-center gap-2 items-center">
                      <FaPhoneAlt size={15} />
                      <p className="text-xs font-semibold">{order.number}</p>
                    </div>
                    <button
                      className="px-4 py-1 cursor-pointer font-bold text-sm bg-[#292929] rounded-full"
                      onClick={() =>
                        handleAcceptClick(
                          order.id,
                          order.number,
                          order.customer
                        )
                      }
                    >
                      Accept
                    </button>
                  </div>
                </div>
                <div className="w-[50%] h-full flex justify-center px-2 items-end flex-col">
                  <p>{order.type}</p>
                  <div className="w-full h-[40%] flex justify-center gap-2 items-center">
                    <p className="text-xs font-bold text-[#f8c324]">From</p>
                    <p className="text-xs font-bold">{order.from}</p>
                  </div>
                  <div className="w-full h-[40%] flex justify-center gap-2 items-center">
                    <p className="font-bold text-[#f8c324] text-xs">To</p>
                    <p className="text-xs font-bold">{order.to}</p>
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
          <div className="relative rounded-md w-[20rem] h-[30rem]">
            <button
              className="absolute top-2 right-2 text-gray-50 rounded-md px-2 py-1 border-red-500 border"
              onClick={() => setOpenModal(false)}
            >
              <MdClear size={30} />
            </button>
            <CallModal
              orderId={selectedOrderId}
              orderNumber={selectedOrderNumber}
              orderName={selectedOrderName}
              closeModal={() => setOpenModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RiderOrders;
