// App.js
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { setOrderStatus, setStage } from "./Global/Orderstatus";

const socket = io("https://dropshop-server.onrender.com");

export default function App() {
  const customerdata = useSelector((state) => state.customer.orders);

  console.log(customerdata.customer);

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
      socket.on("updateOrderStatus", (data) => {
        console.log("Order status change to this :", data);
        dispatch(setStage(data));
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
