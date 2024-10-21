import { useMemo } from "react";
import { CgDanger } from "react-icons/cg";
import Table from "../components/Table";

// Dummy data for orders
const data = [
  {
    orderId: "001",
    riderAssigned: "John Doe",
    orderTime: "10:30 AM",
    price: "$150",
    customer: "Jane Smith",
    location: "123 Street, NY",
    orderType: "Delivery",
  },
  {
    orderId: "002",
    riderAssigned: "Jane Doe",
    orderTime: "11:15 AM",
    price: "$200",
    customer: "John Smith",
    location: "456 Avenue, LA",
    orderType: "Pickup",
  },
  {
    orderId: "003",
    riderAssigned: "Jane Doe",
    orderTime: "11:15 AM",
    price: "$200",
    customer: "John Smith",
    location: "456 Avenue, LA",
    orderType: "Pickup",
  },
  {
    orderId: "004",
    riderAssigned: "John Doe",
    orderTime: "10:30 AM",
    price: "$150",
    customer: "Jane Smith",
    location: "123 Street, NY",
    orderType: "Delivery",
  },
  // Add more orders here...
];

const Allorders = () => {
  // Define table columns
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
        Header: "Order Type",
        accessor: "orderType",
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
    <div className="w-full h-screen">
      {/* Header section */}
      <div className="w-full h-[10%] max-md:h-[15%] font-semibold flex-wrap text-[#f8c314] flex justify-start px-4 items-center gap-3">
        <p className="cursor-pointer">Total orders (3)</p>
        <p className="cursor-pointer">Total accepted (40)</p>
        <p className="cursor-pointer">Total pending (10)</p>
        <p className="cursor-pointer">Riders online(5)</p>
        <p className="cursor-pointer">Riders free (2)</p>
      </div>

      {/* Table section */}
      <div className="w-full h-[90%] max-md:w-[90%]">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Allorders;
