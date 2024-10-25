import React, { useState } from "react";
import { useTable } from "react-table";
import { FaMap } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import DeliveryModal from "../components/Modals/DeliveryModal";
import { useSelector } from "react-redux";
// import axios from "axios";

const Orders = () => {
  const [openModal, setOpenModal] = useState(false); // Modal state
  const [selectedOrder, setSelectedOrder] = useState(null);

  const customerOrder = useSelector((state) => state.customer.orders);
  console.log(customerOrder);

  const toggleModal = (order) => {
    setSelectedOrder(order);
    setOpenModal(!openModal);
  };

  // useEffect(() => {
  //   const getOrders = async () => {
  //     try {
  //       const response = await axios.get("")
  //     }
  //   }
  // },[])

  const columns = React.useMemo(
    () => [
      {
        Header: "Rider",
        accessor: "rider",
      },
      {
        Header: "Order Type",
        accessor: "orderType",
      },
      {
        Header: "Order Status",
        accessor: "orderStatus",
        Cell: ({ value }) => (
          <span
            className={`px-7 inline-flex text-sm py-2 leading-5 font-bold rounded-md 
              ${
                value === "Completed"
                  ? "bg-green-100 text-green-800"
                  : value === "In Progress"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-blue-100 text-blue-800"
              }`}
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: ({ value }) => (
          <div className="flex items-center">
            <div className="w-[20%] h-full flex justify-around gap-3 items-center flex-col">
              <div className="w-[30px] h-[30px] bg-[#0b0c0d] rounded-full flex justify-center items-center">
                <BiMap className="text-slate-300" />
              </div>
              <div className="w-[30px] h-[30px] bg-[#0b0c0d] rounded-full flex justify-center items-center text-slate-300">
                <FaMap />
              </div>
            </div>
            <div className="w-[80%] h-full justify-around items-start gap-5 flex flex-col">
              <span className="text-xs sm:text-sm">{value}</span>
              <p className="text-xs sm:text-sm">{value}</p>
            </div>
          </div>
        ),
      },
      {
        Header: "Activity",
        accessor: "activity",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = React.useMemo(() => customerOrder, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="relative w-full min-h-screen p-4 scrollbar-hide overflow-y-scroll">
      <div
        className={`max-w-7xl mx-auto rounded-lg shadow-md overflow-hidden ${
          openModal ? "opacity-50" : ""
        }`} // Adjust opacity when modal is open
      >
        <div className="overflow-x-auto max-md:w-[21rem]">
          <table
            {...getTableProps()}
            className="w-full table-auto overflow-x-scroll bg-black max-md:w-[20rem]"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-6 py-3 text-left bg-[#f8c324] text-sm max-md:text-xs font-semibold text-black uppercase tracking-wider"
                      key={column.id}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="hover:bg-gray-900 cursor-pointer"
                    onClick={() => toggleModal(row.original)} // Open modal on row click
                    key={row.id}
                  >
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"
                        key={cell.value}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <DeliveryModal
          order={selectedOrder}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default Orders;
