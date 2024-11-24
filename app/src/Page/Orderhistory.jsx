import React from "react";
import { useTable } from "react-table";
import { FaMap } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { useSelector } from "react-redux";

// Main Orderhistory component
const Orderhistory = () => {
  const allHistory = useSelector((state) => state.customer.orderHistory || []);
  console.log(allHistory);

  // Define table columns
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
                : value === "Pending"
                ? "bg-red-100 text-red-800"
                : "bg-gray-100 text-gray-800"
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
  const data = React.useMemo(() => allHistory, []);

  // Create table instance using useTable hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="w-full h-screen">
      {/* Filter Options */}
      <div className="w-full h-[10%] flex justify-end px-2 items-center">
        <div className="w-[25%] h-[90%] flex justify-around items-center max-md:w-[80%]">
          <select
            name="By Status"
            className="w-[40%] h-[70%] px-1 border-gray-500 rounded border-2 outline-none bg-transparent text-slate-200 font-bold"
          >
            <option value="By Status">By status</option>
          </select>
          <select
            name="By Date"
            className="w-[40%] h-[70%] px-1 outline-none border-2 border-gray-500 bg-transparent text-slate-200 rounded font-bold"
          >
            <option value="By Date">By date</option>
          </select>
        </div>
      </div>

      {/* Order Table */}
      <div className="overflow-x-auto max-md:w-[23rem] px-3">
        <table
          {...getTableProps()}
          className="w-full table-auto bg-black max-md:w-[20rem] overflow-x-scroll "
        >
          {/* Table Head */}
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-6 py-3 text-left  bg-[#f8c324] text-sm max-md:text-xs font-semibold text-black uppercase tracking-wider"
                    key={column.id}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
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
  );
};

export default Orderhistory;
