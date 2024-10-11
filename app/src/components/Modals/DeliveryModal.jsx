import { MdClose } from "react-icons/md";

const DeliveryModal = ({ order, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black  p-8 rounded-lg shadow-lg w-[40rem] h-[30rem] relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white font-bold text-2xl"
        >
          <MdClose size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <div className="text-lg">
          <p>
            <strong>Rider:</strong> {order.rider}
          </p>
          <p>
            <strong>Order Type:</strong> {order.orderType}
          </p>
          <p>
            <strong>Status:</strong> {order.orderStatus}
          </p>
          <p>
            <strong>Location:</strong> {order.location}
          </p>
          <p>
            <strong>Activity:</strong> {order.activity}
          </p>
          <p>
            <strong>Price:</strong> {order.price}
          </p>
        </div>
      </div>
      <div onClick={closeModal} className="fixed inset-0 "></div>
    </div>
  );
};

export default DeliveryModal;
