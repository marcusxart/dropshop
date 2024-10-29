import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import LoadingModal from "./LoadingModal";

const socket = io("http://localhost:5000"); // Adjust the URL if needed

const CustomerOrderStatus = ({ customerName }) => {
  const [loading, setLoading] = useState(true); // State to control modal visibility
  const [riderName, setRiderName] = useState(null); // State to store the rider's name when accepted

  useEffect(() => {
    // Listen for 'orderAccepted' event from the server
    socket.on("orderAccepted", (data) => {
      if (data.customerName === customerName) {
        setLoading(false);
        setRiderName(data.riderName); // Set rider name from server data
      }
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.off("orderAccepted");
    };
  }, [customerName]);

  return (
    <div>
      {loading ? (
        <LoadingModal /> // Show LoadingModal until rider accepts
      ) : (
        <div className="text-center p-4">
          <p className="text-green-600 text-lg font-semibold">
            Your order has been accepted by {riderName}!
          </p>
          <p className="text-gray-600 mt-2">
            The rider is on the way to complete your order.
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerOrderStatus;
