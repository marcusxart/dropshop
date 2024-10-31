// App.js
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOrderStatus } from "./Global/Orderstatus";

const socket = io("http://localhost:5000");

export default function App() {
  const customerdata = useSelector((state) => state.customer.Customer);

  const orderStatus = useSelector((state) => state.OrderStatus.status);
  console.log(orderStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket.connected) {
      socket.connect();
    }

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);

      if (socket.connected && customerdata.name) {
        socket.emit("joinRoom", {
          customerName: customerdata.name,
          role: "customer",
        });
      }

      socket.on("orderStatusUpdate", (data) => {
        console.log("Order status update received:", data);
        dispatch(setOrderStatus(data));
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [customerdata.name, dispatch]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
