/* eslint-disable react/jsx-key */
import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { format } from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";

const data = [
  {
    id: 1,
    name: "John Doe",
    dateRegistered: new Date("2023-01-15"),
    totalOrders: 150,
    amountMade: 3000,
    ongoingOrders: 2,
    status: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    dateRegistered: new Date("2023-02-20"),
    totalOrders: 120,
    amountMade: 2500,
    ongoingOrders: 1,
    status: false,
  },
  {
    id: 3,
    name: "Bob Johnson",
    dateRegistered: new Date("2023-03-10"),
    totalOrders: 200,
    amountMade: 4000,
    ongoingOrders: 3,
    status: true,
  },
  // Add more sample data as needed
];

const Riders = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Rider",
        accessor: "name",
        Cell: ({ value }) => <span className="text-[#F8C324]">{value}</span>,
      },
      {
        Header: "Date Registered",
        accessor: "dateRegistered",
        Cell: ({ value }) => format(value, "dd/MM/yyyy"),
      },
      {
        Header: "Total Orders",
        accessor: "totalOrders",
      },
      {
        Header: "Amount Made",
        accessor: "amountMade",
        Cell: ({ value }) => `₦${value.toFixed(2)}`,
      },
      {
        Header: "Ongoing Orders",
        accessor: "ongoingOrders",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <div className="flex items-center justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={value}
                readOnly
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {value ? "On" : "Off"}
              </span>
            </label>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    // pageOptions,
    // setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center ">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search riders..."
          className="p-2 border-2 w-[40%] max-md:w-[98%] px-3 outline-none border-gray-900 rounded bg-transparent"
        />
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg bg-black max-md:w-[22rem]">
        <table
          {...getTableProps()}
          className="w-full text-sm text-left text-gray-500  dark:text-gray-400 "
        >
          <thead className="text-xs text-gray-700 font-extrabold uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-6 py-3 whitespace-nowrap"
                  >
                    <div className="flex items-center">
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ChevronDown
                              className="inline-block ml-1"
                              size={16}
                            />
                          ) : (
                            <ChevronUp
                              className="inline-block ml-1"
                              size={16}
                            />
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="bg-white border-b dark:bg-black dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="px-6 py-4">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
        {/* <div className="flex items-center space-x-2">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
            className="p-1 border rounded bg-transparent"
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div> */}
      </div>
    </div>
  );
};

export default Riders;
