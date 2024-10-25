import { useEffect, useMemo, useState } from "react";
import Table from "../../Admin/components/Table";
import Selectmodal from "../../components/Modals/Selectmodal";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setRiderOngoingOrdering } from "../../Global/rideSlic";

const Ongoing = () => {
  const [selectedOrder, setSelectedOrder] = useState(null); // State to track the selected order
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  const handleOrderClick = (order) => {
    setSelectedOrder(order); // Set the selected order
    setOpenModal(true); // Open the modal
  };

  const riderData = useSelector((state) => state.rider.rider);
  const riderOngoing =
    useSelector((state) => state.rider.riderOngoingOrdering) || []; // Ensure fallback to an empty array

  const dispatch = useDispatch();

  useEffect(() => {
    const getOngoingOrders = async () => {
      const toastLoading = toast.loading("Please wait...");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/ongoingOrder",
          {
            headers: {
              Authorization: `Bearer ${riderData.token}`,
            },
          }
        );

        // Convert response to array if it’s not one already
        const ordersArray = Array.isArray(response.data)
          ? response.data
          : Object.values(response.data);

        dispatch(setRiderOngoingOrdering(ordersArray)); // Dispatch as an array
        toast.success("Received Successfully...");
      } catch (error) {
        toast.error(error.response?.data?.message || "Data fetch error");
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    getOngoingOrders();
  }, [dispatch, riderData.token]);

  const columns = useMemo(
    () => [
      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "OrderType",
        accessor: "orderType",
      },
      {
        Header: "Order Status",
        accessor: "orderStatus",
        Cell: ({ value }) => (
          <span
            className={
              value === "Ongoing"
                ? "text-orange-600 bg-orange-300 py-2 px-2 rounded-md font-semibold"
                : value === "Completed"
                ? "text-green-600 font-semibold bg-green-300 py-2 px-2 rounded"
                : "text-gray-500 font-semibold"
            }
          >
            {value}
          </span>
        ),
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Date",
        accessor: "date",
      },
    ],
    []
  );

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Table
        data={riderOngoing}
        columns={columns}
        getTableProps={() => ({
          className: "w-full bg-white rounded-lg", // Table styling
        })}
        getHeaderProps={() => ({
          className: "bg-yellow-500 text-black font-bold text-lg p-2", // Yellow table header
        })}
        getCellProps={() => ({
          className: "p-4 border-b cursor-pointer", // Cell styling with cursor pointer
        })}
        onRowClick={handleOrderClick} // Handle row click
      />

      {/* Modal for showing selected order details */}
      <Selectmodal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        order={selectedOrder} // Pass the selected order to modal
      />
    </div>
  );
};

export default Ongoing;
