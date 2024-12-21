import axios from "axios";
import toast from "react-hot-toast";
import { MdFileCopy } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setRiderOngoingOrdering } from "../../Global/rideSlic";

const CallModal = ({ orderId, orderNumber, orderName, closeModal }) => {
  const phoneNumber = orderNumber;
  const riderdata = useSelector((state) => state.rider.rider);
  const dispatch = useDispatch();

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Number copied to clipboard!");
  };

  const headers = {
    authorization: `Bearer ${riderdata.token}`,
  };

  const HandleAcceptOrder = async () => {
    const toastLoading = toast.loading("Please wait...");

    try {
      const response = await axios.put(
        `https://dropshop-server.onrender.com/api/acceptOrder/${orderId}`,
        {},
        { headers }
      );
      toast.success("Order accepted");

      dispatch(setRiderOngoingOrdering(response.data));

      closeModal(true);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error while processing order"
      );
    } finally {
      toast.dismiss(toastLoading);
    }
  };

  return (
    <div className="w-full h-full  rounded bg-[#0b0b0d] flex flex-col justify-center items-center">
      <div className="w-full h-[20%] flex justify-around px-3 items-center flex-col">
        <p className="text-2xl font-semibold">Please call your Client</p>
        <p className="text-center text-sm text-slate-400">
          Before you proceed, you have 10 minutes to call your client
        </p>
      </div>
      <div className="w-full h-[50%] flex flex-col justify-center items-center">
        <p className="font-bold text-xl ">{orderName}</p>
        <div className="w-full h-[30%] flex justify-center gap-3 items-center">
          <p className="text-2xl font-semibold text-[#f8c324]">{phoneNumber}</p>
          <MdFileCopy
            size={30}
            onClick={handleCopy}
            className="cursor-pointer"
          />
        </div>
        <div className="w-full h-[30%] flex justify-around items-center">
          <button
            className="px-6 py-2 bg-green-400 text-gray-50 font-semibold rounded-md"
            onClick={HandleAcceptOrder}
          >
            Accept Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallModal;
