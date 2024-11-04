// import { useEffect } from "react";
import { BiMap } from "react-icons/bi";
import { MdClose } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";
// import { io } from "socket.io-client";
// import { setStage } from "../../Global/Orderstatus";

// const socket = io("http://localhost:5000");

const DeliveryModal = ({ closeModal }) => {
  // const dispatch = useDispatch();

  // const stage = useSelector((state) => state.stage.orderStatus);
  // console.log(stage);
  // console.log(socket);

  // useEffect(() => {
  //   if (!socket.connected) {
  //     socket.connect();
  //   }

  //   console.log(socket);

  //   socket.on("connect", () => {
  //     console.log("Socket connected:", socket.id);
  //     socket.on("updateStage", (data) => {
  //       dispatch(setStage(data.orderStatus));
  //       console.log("Order status updated:", data);
  //     });
  //   });
  // }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black  p-8 rounded-lg shadow-lg w-[40rem] h-[30rem] relative max-md:w-[20rem]">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white font-bold text-2xl"
        >
          <MdClose size={20} />
        </button>
        <div className="w-full h-[20%] flex justify-center gap-1 flex-col items-center">
          <p className=" font-semibold text-xs text-slate-400">In progress</p>
          <p className=" font-semibold text-2xl text-[#f8c324]">
            Delivering in 30 minutes
          </p>
        </div>
        <div className="w-full h-[20%]  flex justify-around items-center">
          <div className="w-[20%] h-[70%]  flex flex-col justify-around items-center">
            <p>on the way</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[40%] h-[70%]  flex flex-col justify-around items-center">
            <p>picked up</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[20%] h-[70%]  flex flex-col justify-around items-center">
            <p>delivered</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-[#f8c324]"></span>
            <div className="w-[90%] h-[30%] bg-[#f8c324] rounded-full"></div>
          </div>
          <div className="w-[10%] h-[70%]  flex justify-around flex-col items-center">
            <p>done</p>
            <span className=" w-[5px] h-[5px] rounded-full bg-white"></span>
            <div className="w-[90%] h-[30%] bg-white rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center gap-2 items-center">
          <BiMap size={30} color="#f8c324" />
          <p className=" textsm font-medium">
            {" "}
            Kempegowda, Sevashrama, Bengaluru, Karnataka, India
          </p>
        </div>
      </div>
      <div onClick={closeModal} className="fixed inset-0 "></div>
    </div>
  );
};

export default DeliveryModal;

// import React, { useState } from "react";
// import { useTable } from "react-table";
// import { FaMap } from "react-icons/fa";
// import { BiMap } from "react-icons/bi";
// import DeliveryModal from "../components/Modals/DeliveryModal";
// import { useSelector } from "react-redux";
// // import axios from "axios";

// const Orders = () => {
//   const [openModal, setOpenModal] = useState(false); // Modal state
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   const customerOrder = useSelector((state) => state.customer.orders || []);

//   const toggleModal = (order) => {
//     setSelectedOrder(order);
//     setOpenModal(!openModal);
//   };

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Rider",
//         accessor: "rider", // Adjust as needed if you have a specific rider name
//       },
//       {
//         Header: "Order Type",
//         accessor: "type",
//       },
//       {
//         Header: "Order Status",
//         accessor: "status",
//         Cell: ({ value }) => (
//           <span
//             className={`px-7 inline-flex text-sm py-2 leading-5 capitalize font-bold rounded-md
//             ${
//               value === "Completed"
//                 ? "bg-green-100 text-green-800"
//                 : value === "In Progress"
//                 ? "bg-yellow-100 text-yellow-800"
//                 : "bg-blue-100 text-blue-800"
//             }`}
//           >
//             {value}
//           </span>
//         ),
//       },
//       {
//         Header: "Location",
//         accessor: "from", // Use 'from' to represent the pickup location
//         Cell: ({ row }) => (
//           <div className="flex items-center">
//             <div className="w-[20%] h-full flex justify-around gap-3 items-center flex-col">
//               <div className="w-[30px] h-[30px] bg-[#0b0c0d] rounded-full flex justify-center items-center">
//                 <BiMap className="text-slate-300" />
//               </div>
//               <div className="w-[30px] h-[30px] bg-[#0b0c0d] rounded-full flex justify-center items-center text-slate-300">
//                 <FaMap />
//               </div>
//             </div>
//             <div className="w-[80%] h-full justify-around items-start gap-5 flex flex-col">
//               <span className="text-xs sm:text-sm">{row.original.from}</span>
//               <p className="text-xs sm:text-sm">{row.original.to}</p>
//             </div>
//           </div>
//         ),
//       },
//       {
//         Header: "Details",
//         accessor: "details",
//       },
//       {
//         Header: "Price",
//         accessor: "price",
//       },
//     ],
//     []
//   );

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const data = React.useMemo(() => customerOrder, []);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({
//       columns,
//       data,
//     });

//   return (
//     <div className="relative w-full min-h-screen p-4 scrollbar-hide overflow-y-scroll">
//       <div
//         className={`max-w-7xl mx-auto rounded-lg shadow-md overflow-hidden ${
//           openModal ? "opacity-50" : ""
//         }`} // Adjust opacity when modal is open
//       >
//         <div className="overflow-x-auto max-md:w-[21rem]">
//           <table
//             {...getTableProps()}
//             className="w-full table-auto overflow-x-scroll bg-black max-md:w-[20rem]"
//           >
//             <thead>
//               {headerGroups.map((headerGroup) => (
//                 <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
//                   {headerGroup.headers.map((column) => (
//                     <th
//                       {...column.getHeaderProps()}
//                       className="px-6 py-3 text-left bg-[#f8c324] text-sm max-md:text-xs font-semibold text-black uppercase tracking-wider"
//                       key={column.id}
//                     >
//                       {column.render("Header")}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//               {rows.map((row) => {
//                 prepareRow(row);
//                 return (
//                   <tr
//                     {...row.getRowProps()}
//                     className="hover:bg-gray-900 cursor-pointer"
//                     onClick={() => toggleModal(row.original)} // Open modal on row click
//                     key={row.id}
//                   >
//                     {row.cells.map((cell) => (
//                       <td
//                         {...cell.getCellProps()}
//                         className="px-6 py-2 whitespace-nowrap text-sm text-gray-300"
//                         key={cell.value}
//                       >
//                         {cell.render("Cell")}
//                       </td>
//                     ))}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal */}
//       {openModal && (
//         <DeliveryModal
//           order={selectedOrder}
//           closeModal={() => setOpenModal(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Orders;
