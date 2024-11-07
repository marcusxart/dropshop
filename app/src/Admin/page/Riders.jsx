/* eslint-disable react/jsx-key */
import { useEffect, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

import { ChevronDown, ChevronUp } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllRiders } from "../../Global/adminSlic";
import { useNavigate } from "react-router-dom";

const Riders = () => {
  const admindata = useSelector((state) => state.admin.admin);
  const AllRiders = useSelector((state) => state.admin.riders);
  console.log(AllRiders);

  const navigate = useNavigate();

  const headers = {
    Authorization: `Bearer ${admindata.token}`,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllRider = async () => {
      const toastLoading = toast.loading("Please wait...");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getAllRiders",
          { headers }
        );

        toast.success("All Riders have been Updated Successfully");
        dispatch(setAllRiders(response.data));
      } catch (err) {
        console.log(err.message);
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    getAllRider();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Rider",
        accessor: "name",
        Cell: ({ value }) => <span className="text-[#F8C324]">{value}</span>,
      },
      {
        Header: "Date Registered",
        accessor: "createdAt", // Update accessor to 'createdAt'
        Cell: ({ value }) => new Date(value).toLocaleDateString(), // Format the date
      },

      {
        Header: "Amount Made",
        accessor: "amountMade",
        Cell: ({ value }) => `₦${value}`,
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
  } = useTable(
    {
      columns,
      data: AllRiders,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center justify-around ">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search riders... this is it"
          className="p-2 border-2 w-[40%] max-md:w-[98%] px-3 outline-none border-gray-900 rounded bg-transparent"
        />
        <div className="w-[40rem] h-[3rem]  flex justify-end px-5 items-center">
          <button
            className="py-2 px-3 bg-[#f8c314] font-bold text-sm rounded-md"
            onClick={() => navigate("/rider-auth/rider-reg")}
          >
            Register New Rider
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default Riders;
