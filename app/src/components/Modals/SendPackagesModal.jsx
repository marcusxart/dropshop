/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { FaRegEdit, FaRegThumbsUp } from "react-icons/fa";
import { MdLocationOn, MdOutlineClear } from "react-icons/md";
import Pickdetails from "./Pickdetails";
import LocationModalSystem from "./LocationModal";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setOrders } from "../../Global/customerSlice";
// import { io } from "socket.io-client";
// import { setOrderStatus } from "../../Global/Orderstatus";
// import { useNavigate } from "react-router-dom";
import LoadingModal from "./LoadingModal";

// const socket = io("http://localhost:5000");

const SendPackagesModal = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isPickDetailsOpen, setIsPickDetailsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const orderStatus = useSelector((state) => state.OrderStatus.status);
  console.log(orderStatus);

  // const nav = useNavigate();
  const selectedOption = localStorage.getItem("selectedOption");
  const customerdata = useSelector((state) => state.customer.Customer);

  const dispatch = useDispatch();

  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
    console.log("hello world");
  };

  const orderdata = JSON.parse(localStorage.getItem("orderData") || "{}");

  const headers = {
    Authorization: `Bearer ${customerdata.token}`,
  };

  const handleClosePickDetails = () => {
    setIsPickDetailsOpen(false);
  };

  // useEffect(() => {
  //   if (!socket.connected) {
  //     socket.connect();
  //   }

  //   socket.on("connect", () => {
  //     console.log("Socket connected:", socket.id);
  //     socket.on("orderStatusUpdate", (data) => {
  //       // Handle order status update
  //       console.log("Order status update received:", data);
  //       dispatch(setOrderStatus(data.orderStatus)); // Update the order status state
  //       toast.success(`Order status updated: ${data.orderStatus}`); // Display a toast notification
  //       setIsLoading(false);
  //       setTimeout(() => {
  //         nav("/user/on-going");
  //       }, 2000);
  //     });
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [customerdata.name, dispatch, nav]);

  const HandleOrder = async () => {
    const toastLoading = toast.loading("Placing your order...");
    setIsLoading(true); // Set loading state to true

    try {
      const response = await axios.post(
        "https://dropshop-server.onrender.com/api/createOrder",
        orderdata,
        { headers }
      );

      toast.success("Order placed successfully!");
      const orderDataArray = Array.isArray(response.data)
        ? response.data
        : [response.data];
      dispatch(setOrders(orderDataArray));
      localStorage.clear();

      // Emit join room event only after confirming order placement
      // if (socket.connected) {
      //   socket.emit("joinRoom", {
      //     customerName: customerdata.name,
      //     role: "customer",
      //   });
      //   console.log(`Joined room: ${response.data.customer}`);
      // }

      setIsOpen(false); // Close modal after order is placed
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order");
    } finally {
      setIsLoading(false); // Reset loading state
      toast.dismiss(toastLoading);
    }
  };

  // If the modal is closed or loading, render nothing
  if (!isOpen && !isLoading) {
    return null;
  }

  return (
    <>
      {isLoading && (
        <div className="loader">
          <LoadingModal />
        </div> // Simple loading indicator
      )}
      {!isLoading && isOpen && (
        <div className="w-[40rem] h-[35rem] bg-black max-md:w-[23rem] rounded-lg flex-col flex justify-around items-center">
          {isSearchModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="relative">
                <LocationModalSystem onClose={handleCloseSearchModal} />
                <button
                  className="absolute top-2 right-5 border px-2 rounded-lg py-1 text-white"
                  onClick={handleCloseSearchModal}
                >
                  <MdOutlineClear size={30} />
                </button>
              </div>
            </div>
          )}

          {isPickDetailsOpen ? (
            <Pickdetails location="Abuja" onContinue={handleClosePickDetails} />
          ) : (
            <>
              <div className="w-full h-[20%] flex justify-center items-start flex-col px-8">
                <p className="font-semibold text-2xl max-md:text-xl">
                  Send Packages in Abuja
                </p>
                <p className="font-medium">Your on-demand local courier</p>
              </div>

              <div className="w-full h-[30%] flex justify-start px-8 items-center">
                <div className="w-[10%] h-full flex flex-col justify-center items-center relative">
                  <MdLocationOn className="text-red-500 text-3xl" />
                  <div className="w-[2px] h-[50%] bg-gray-300"></div>
                  <MdLocationOn className="text-green-500 text-3xl" />
                </div>

                <div className="w-[90%] h-[92%] flex justify-around items-center flex-col max-md:h-[100%]">
                  <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center gap-1 items-start">
                    <label className="font-semibold text-slate-400">
                      {selectedOption} Location{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div
                      className="py-1 cursor-pointer text-slate-200 w-full outline-none bg-transparent border-b-2 border-[#f8c534]"
                      onClick={handleOpenSearchModal}
                    >
                      <p className="font-semibold">
                        {orderdata.from
                          ? orderdata.from
                          : `Search ${selectedOption} location`}
                      </p>
                    </div>
                  </div>
                  <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center items-start">
                    <label className="font-semibold text-slate-400">
                      Drop Point <span className="text-red-500">*</span>
                    </label>
                    <div className="text-slate-300 border-[#f8c324] border-b-2 w-full outline-none bg-transparent">
                      <p className="max-md:text-sm font-bold">
                        {orderdata.to ? orderdata.to : "Drop-off location"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[60%] h-[50%] flex justify-center gap-4 items-start flex-col max-md:w-[89%]">
                <div className="w-full h-[20%] cursor-pointer bg-[#1b1b1b] rounded-md flex justify-start px-4 text-slate-400 gap-2 items-center">
                  <FaRegEdit size={30} />
                  <p className="max-md:text-sm max-md:text-center">
                    {orderdata.details
                      ? orderdata.details
                      : " Any instructions for the delivery partner?"}{" "}
                  </p>
                </div>
                <p className="text-[11px]">
                  By confirming, I accept this order doesn’t contain
                  illegal/restricted items. If illegal/restricted items are
                  found by the delivery partner, they may report it to law
                  enforcement authorities. <span>Terms and conditions</span>
                </p>
                <div className="w-full h-[20%] flex justify-start items-center">
                  <button
                    onClick={HandleOrder}
                    className="py-3 px-10 flex justify-center gap-2 items-center text-black font-bold bg-white rounded-full"
                  >
                    Confirm <FaRegThumbsUp />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SendPackagesModal;

// import { useEffect, useState, useCallback } from "react";
// import { FaRegEdit, FaRegThumbsUp } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import Pickdetails from "./Pickdetails";
// import LocationModalSystem from "./LocationModal";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { setOrders } from "../../Global/customerSlice";
// import { io } from "socket.io-client";
// import { setOrderStatus } from "../../Global/Orderstatus";
// import { useNavigate } from "react-router-dom";
// import LoadingModal from "./LoadingModal";

// const socket = io("http://localhost:5000");

// const SendPackagesModal = () => {
//   const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
//   const [isPickDetailsOpen, setIsPickDetailsOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   const orderStatus = useSelector((state) => state.OrderStatus.status);
//   console.log(orderStatus);

//   const customerdata = useSelector((state) => state.customer.Customer);
//   const customerOrder = useSelector((state) => state.customer.orders);
//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   const selectedOption = localStorage.getItem("selectedOption");
//   const orderdata = JSON.parse(localStorage.getItem("orderData") || "{}");
//   const headers = { Authorization: `Bearer ${customerdata.token}` };

//   const handleSocketConnection = useCallback(() => {
//     socket.on("connect", () => {
//       console.log("Socket connected:", socket.id);
//       socket.on("orderStatusUpdate", (data) => {
//         dispatch(setOrderStatus(data.orderStatus));
//         toast.success(`Order status updated: ${data.orderStatus}`);
//         setIsLoading(false);
//         setTimeout(() => nav("/user/on-going"), 2000);
//       });
//     });

//     return () => socket.disconnect();
//   }, [dispatch, nav]);

//   useEffect(() => {
//     if (!socket.connected) {
//       socket.connect();
//       handleSocketConnection();
//     }
//   }, [handleSocketConnection]);

//   const handleOpenSearchModal = () => setIsSearchModalOpen(true);
//   const handleCloseSearchModal = () => setIsSearchModalOpen(false);
//   const handleClosePickDetails = () => setIsPickDetailsOpen(false);

//   const handleOrder = async () => {
//     const toastLoading = toast.loading("Placing your order...");
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/createOrder",
//         orderdata,
//         { headers }
//       );

//       toast.success("Order placed successfully!");
//       const orderDataArray = Array.isArray(response.data)
//         ? response.data
//         : [response.data];
//       dispatch(setOrders(orderDataArray));
//       localStorage.clear();

//       if (socket.connected) {
//         socket.emit("joinRoom", {
//           customerName: customerOrder.id,
//           role: "customer",
//         });
//         console.log(`Joined room: ${response.data.customer}`);
//       }

//       setIsOpen(false);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to place order");
//     } finally {
//       setIsLoading(false);
//       toast.dismiss(toastLoading);
//     }
//   };

//   if (!isOpen && !isLoading) return null;

//   return (
//     <>
//       {isLoading && (
//         <div className="loader">
//           <LoadingModal />
//         </div>
//       )}
//       {!isLoading && isOpen && (
//         <OrderModalContent
//           isSearchModalOpen={isSearchModalOpen}
//           isPickDetailsOpen={isPickDetailsOpen}
//           selectedOption={selectedOption}
//           orderdata={orderdata}
//           onOpenSearchModal={handleOpenSearchModal}
//           onCloseSearchModal={handleCloseSearchModal}
//           onClosePickDetails={handleClosePickDetails}
//           onConfirmOrder={handleOrder}
//         />
//       )}
//     </>
//   );
// };

// const HandleClose = () => {};

// const OrderModalContent = ({
//   isSearchModalOpen,
//   isPickDetailsOpen,
//   selectedOption,
//   orderdata,
//   onOpenSearchModal,
//   // onCloseSearchModal,
//   onClosePickDetails,
//   onConfirmOrder,
// }) => {
//   return (
//     <div className="w-[40rem] h-[35rem] bg-black max-md:w-[23rem] rounded-lg flex-col flex justify-around items-center">
//       {isSearchModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="relative">
//             <LocationModalSystem HandleClose={HandleClose} />
//           </div>
//         </div>
//       )}

//       {isPickDetailsOpen ? (
//         <Pickdetails location="Abuja" onContinue={onClosePickDetails} />
//       ) : (
//         <>
//           <div className="w-full h-[20%] flex justify-center items-start flex-col px-8">
//             <p className="font-semibold text-2xl max-md:text-xl">
//               Send Packages in Abuja
//             </p>
//             <p className="font-medium">Your on-demand local courier</p>
//           </div>

//           <div className="w-full h-[30%] flex justify-start px-8 items-center">
//             <div className="w-[10%] h-full flex flex-col justify-center items-center relative">
//               <MdLocationOn className="text-red-500 text-3xl" />
//               <div className="w-[2px] h-[50%] bg-gray-300"></div>
//               <MdLocationOn className="text-green-500 text-3xl" />
//             </div>

//             <div className="w-[90%] h-[92%] flex justify-around items-center flex-col max-md:h-[100%]">
//               <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center gap-1 items-start">
//                 <label className="font-semibold text-slate-400">
//                   {selectedOption} Location{" "}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <div
//                   className="py-1 cursor-pointer text-slate-200 w-full outline-none bg-transparent border-b-2 border-[#f8c534]"
//                   onClick={onOpenSearchModal}
//                 >
//                   <p className="font-semibold">
//                     {orderdata.from || `Search ${selectedOption} location`}
//                   </p>
//                 </div>
//               </div>
//               <div className="w-[90%] h-[50%] flex flex-col px-2 justify-center items-start">
//                 <label className="font-semibold text-slate-400">
//                   Drop Point <span className="text-red-500">*</span>
//                 </label>
//                 <div className="text-slate-300 border-[#f8c324] border-b-2 w-full outline-none bg-transparent">
//                   <p className="max-md:text-sm font-bold">
//                     {orderdata.to || "Drop-off location"}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-[60%] h-[50%] flex justify-center gap-4 items-start flex-col max-md:w-[89%]">
//             <div className="w-full h-[20%] cursor-pointer bg-[#1b1b1b] rounded-md flex justify-start px-4 text-slate-400 gap-2 items-center">
//               <FaRegEdit size={30} />
//               <p className="max-md:text-sm max-md:text-center">
//                 {orderdata.details ||
//                   "Any instructions for the delivery partner?"}
//               </p>
//             </div>
//             <p className="text-[11px]">
//               By confirming, I accept this order doesn’t contain
//               illegal/restricted items. If illegal/restricted items are found by
//               the delivery partner, they may report it to law enforcement
//               authorities. <span>Terms and conditions</span>
//             </p>
//             <div className="w-full h-[20%] flex justify-start items-center">
//               <button
//                 onClick={onConfirmOrder}
//                 className="py-3 px-10 flex justify-center gap-2 items-center text-black font-bold bg-white rounded-full"
//               >
//                 Confirm <FaRegThumbsUp />
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SendPackagesModal;
