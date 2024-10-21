import { Search } from "lucide-react";
import Table from "../components/Table";
import { CgDanger } from "react-icons/cg";
import { useMemo } from "react";

// Sample data
const data = [
  {
    orderId: "001",
    riderAssigned: "John Doe",
    orderTime: "10:30 AM",
    price: "$150",
    customer: "Jane Smith",
    location: "123 Street, NY",
    orderType: "Delivery",
    orderStatus: "Completed",
  },
  {
    orderId: "002",
    riderAssigned: "Jane Doe",
    orderTime: "11:15 AM",
    price: "$200",
    customer: "John Smith",
    location: "456 Avenue, LA",
    orderType: "Pickup",
    orderStatus: "Pending",
  },
  {
    orderId: "003",
    riderAssigned: "Jane Doe",
    orderTime: "11:15 AM",
    price: "$200",
    customer: "John Smith",
    location: "456 Avenue, LA",
    orderType: "Pickup",
    orderStatus: "Failed",
  },
  {
    orderId: "004",
    riderAssigned: "John Doe",
    orderTime: "10:30 AM",
    price: "$150",
    customer: "Jane Smith",
    location: "123 Street, NY",
    orderType: "Delivery",
    orderStatus: "Completed",
  },
];

const AdminHistory = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Order Id",
        accessor: "orderId",
        Cell: ({ value }) => (
          <span className="text-[#f8c324] font-semibold">{value}</span>
        ),
      },
      {
        Header: "Rider Assigned",
        accessor: "riderAssigned",
      },
      {
        Header: "Order Time",
        accessor: "orderTime",
      },
      {
        Header: "Order Status",
        accessor: "orderStatus",
        Cell: ({ value }) => {
          let statusClass = "";
          if (value === "Completed") {
            statusClass = "text-green-500";
          } else if (value === "Pending") {
            statusClass = "text-yellow-500 ";
          } else if (value === "Failed") {
            statusClass = "text-red-500";
          }

          return (
            <span
              className={`px-7 inline-flex text-sm py-2 leading-5 font-bold rounded-md ${statusClass}`}
            >
              {value}
            </span>
          );
        },
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Customer",
        accessor: "customer",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        // Adding the CgDanger icon at the end of each row
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
    <div className="container px-3">
      <div
        className="mb-4 flex items-center border rounded max-md:w-[97%] 
       border-[#f8c324] px-3 w-[50%] "
      >
        <Search />
        <input
          placeholder="Search order id or customer name..."
          className="p-2 w-[100%] max-md:w-[98%] px-3 outline-none border-gray-900 rounded bg-transparent"
        />
      </div>
      <div className="w-full h-[90%]  max-md:w-[22rem] overflow-y-scroll scrollbar-thin scrollbar-hide">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AdminHistory;
