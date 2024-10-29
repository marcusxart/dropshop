import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import LoadingModal from "./LoadingModal";
// import { MdRotateLeft } from "react-icons/md";

const socket = io.connect("http://localhost:5000");

// Adjust the URL if needed

const CustomerOrderStatus = ({ customerName }) => {
  const [loading, setLoading] = useState(true);
  const [riderMessage, setRiderMessage] = useState(null); // Store message from rider

  console.log(socket);
  useEffect(() => {
    // Listen for 'to_customer' event from the server

    console.log(socket);

    socket.on("to_customer", (data) => {
      console.log(data);
    });

    // Clean up the socket connection when the component unmounts
    // return () => {
    //   socket.off("to_customer");
    // };
  }, []);

  socket.on("to_customer", (data) => {
    console.log(data);
  });

  return (
    <div>
      {loading ? (
        <LoadingModal /> // Show LoadingModal until rider accepts
      ) : (
        <div className="text-center p-4">
          <p className="text-green-600 text-lg font-semibold">{riderMessage}</p>
          <p className="text-gray-600 mt-2">
            The rider is on the way to complete your order.
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerOrderStatus;
