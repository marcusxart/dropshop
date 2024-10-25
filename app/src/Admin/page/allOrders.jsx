import { useEffect, useMemo } from "react";
import { CgDanger } from "react-icons/cg";
import Table from "../components/Table";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setAllOrders } from "../../Global/adminSlic";
import axios from "axios";

const Allorders = () => {
  const admindata = useSelector((state) => state.admin.admin);
  const dispatch = useDispatch();

  const headers = {
    Authorization: `Bearer ${admindata.token}`,
  };

  const AllOrders = useSelector((state) => state.admin.orders);

  useEffect(() => {
    const getAllorders = async () => {
      const toastLoading = toast.loading("Please wait....");
      try {
        const response = await axios.get(
          `http://localhost:5000/api/getAllOrders?status`,
          {
            headers,
          }
        );
        toast.success("All Orders Received");
        dispatch(setAllOrders(response.data));
      } catch (err) {
        console.log(err);
        toast.error("Failed to fetch orders.");
      } finally {
        toast.dismiss(toastLoading);
      }
    };
    getAllorders();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Order Id",
        accessor: "id", // Assuming 'id' is your order ID
        Cell: ({ value }) => (
          <span className="text-[#f8c324] font-semibold">{value}</span>
        ),
      },
      {
        Header: "Order Type",
        accessor: "type", // Order type
      },
      {
        Header: "Rider Assigned",
        accessor: "rider", // Rider assigned, can be null
        Cell: ({ value }) => (value ? value : "Not Assigned"), // Handle null case
      },
      {
        Header: "Order Time",
        accessor: "createdAt", // Use createdAt for order time
        Cell: ({ value }) => new Date(value).toLocaleDateString(), // Format the date
      },
      {
        Header: "Price",
        accessor: "price", // Price
        Cell: ({ value }) => `₦${value}`, // Format price
      },
      {
        Header: "Customer",
        accessor: "customer", // Customer name
      },
      {
        Header: "From",
        accessor: "from", // From location
      },
      {
        Header: "To",
        accessor: "to", // To location
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          // let bgColor;
          let color;
          switch (value) {
            case "pending":
              // bgColor = "bg-yellow-800";
              color = "text-yellow-300";
              break;
            case "delivered":
              // bgColor = "bg-green-800";
              color = "text-green-300";
              break;
            case "failed":
              // bgColor = "bg-red-800";
              color = "text-red-300";
              break;
            default:
            // bgColor = "bg-gray-300"; // Default color for unknown statuses
          }

          return (
            <div
              className={`flex justify-center  ${color} py-1 font-semibold px-2 rounded`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}{" "}
              {/* Capitalize status */}
            </div>
          );
        },
      },
      {
        Header: "",
        accessor: "actions",
        Cell: () => (
          <div className="flex justify-center">
            <CgDanger className="text-[#f8c324] text-xl cursor-pointer" />
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="w-full h-screen">
      {/* Header section */}
      <div className="w-full h-[10%] max-md:h-[15%] font-semibold flex-wrap text-[#f8c314] flex justify-start px-4 items-center gap-3">
        <p className="cursor-pointer">Total orders ({AllOrders.length})</p>
        {/* Update these values based on your data */}
        <p className="cursor-pointer">Total accepted (40)</p>
        <p className="cursor-pointer">Total pending (10)</p>
        <p className="cursor-pointer">Riders online(5)</p>
        <p className="cursor-pointer">Riders free (2)</p>
      </div>

      {/* Table section */}
      <div className="w-full h-[90%] max-md:w-[90%]">
        <Table columns={columns} data={AllOrders} />
      </div>
    </div>
  );
};

export default Allorders;
