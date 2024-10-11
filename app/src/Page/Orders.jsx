import React from "react";
import { useTable } from "react-table";
import { FaMap } from "react-icons/fa";
import { BiMap } from "react-icons/bi";

// Sample order data
const orders = [
  {
    id: 1,
    rider: "John Doe",
    orderType: "Delivery",
    orderStatus: "In Progress",
    location: "123 Main St, City",
    activity: "En route",
    price: "$150.00",
  },
  {
    id: 2,
    rider: "Jane Smith",
    orderType: "Pickup",
    orderStatus: "Completed",
    location: "456 Elm St, Town",
    activity: "Delivered",
    price: "$75.50",
  },
  {
    id: 3,
    rider: "Bob Johnson",
    orderType: "Delivery",
    orderStatus: "Pending",
    location: "789 Oak St, Village",
    activity: "Waiting",
    price: "$200.25",
  },
  // Add more orders as needed
];

const Orders = () => {
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

  const data = React.useMemo(() => orders, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="w-full min-h-screen p-4 scrollbar-hide overflow-y-scroll">
      <div className="max-w-7xl mx-auto rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto max-md:w-[22.4rem]">
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
                      className="px-6 py-3 text-left bg-[#f8c324] text-sm max-md:tex-xs font-semibold text-black uppercase tracking-wider"
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
    </div>
  );
};

export default Orders;
