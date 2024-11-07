/* eslint-disable react/jsx-key */
import { useEffect, useMemo, useState } from "react";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headers = { Authorization: `Bearer ${admindata.token}` };

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
      toast.error("Failed to load riders");
      console.error(err.message);
    } finally {
      toast.dismiss(toastLoading);
    }
  };

  useEffect(() => {
    getAllRider();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteRider = async (id) => {
    const toastLoading = toast.loading("Please wait...");
    try {
      await axios.delete(`http://localhost:5000/api/deleteRider/${id}`, {
        headers,
      });
      toast.success("Rider has been deleted successfully");
      getAllRider(); // Refresh riders list after deletion
    } catch (err) {
      toast.error("Error deleting rider");
      console.error(err.message);
    } finally {
      toast.dismiss(toastLoading);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Rider",
        accessor: "name",
        Cell: ({ value }) => <span className="text-[#F8C324]">{value}</span>,
      },
      {
        Header: "Date Registered",
        accessor: "createdAt",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
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
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => {
          const [dropdownOpen, setDropdownOpen] = useState(false);
          const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

          const handleAction = (action) => {
            switch (action) {
              case "delete":
                handleDeleteRider(row.original.id);
                break;
              case "suspend":
                toast("Suspension feature not implemented yet");
                break;
              case "confirm":
                toast("Confirmation feature not implemented yet");
                break;
              default:
                break;
            }
            setDropdownOpen(false);
          };

          return (
            <div className="relative flex items-center justify-center">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Action
              </button>
              {dropdownOpen && (
                <div className="absolute mt-1 w-48 bg-white right-2 top-2 rounded-md shadow-lg z-10">
                  <ul className="py-1 text-gray-700">
                    <li
                      onClick={() => handleAction("delete")}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Delete Rider
                    </li>
                    <li
                      onClick={() => handleAction("suspend")}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Suspend/Unsuspend Rider
                    </li>
                    <li
                      onClick={() => handleAction("confirm")}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Confirm Rider
                    </li>
                  </ul>
                </div>
              )}
            </div>
          );
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="mb-4 flex items-center justify-around max-md:flex-col ">
        <input
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search riders..."
          className="p-2 border-2 w-[40%] max-md:w-[98%] px-3 outline-none border-gray-900 rounded bg-transparent"
        />
        <div className="w-[40rem] h-[3rem] flex justify-end px-3 items-center max-md:w-[20rem]">
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
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
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
