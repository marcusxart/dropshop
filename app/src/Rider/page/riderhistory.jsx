import { useMemo } from "react";
import Table from "../../Admin/components/Table";

const data = [
  {
    customer: "Alice Johnson",
    orderType: "Pickup",
    orderStatus: "Completed",
    location: "Chicago",
    date: "2024-09-12",
  },
  {
    customer: "Bob Thompson",
    orderType: "Delivery",
    orderStatus: "Cancelled",
    location: "Houston",
    date: "2024-08-05",
  },
  // Add more historical data as needed
];

const RiderHistory = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Customer",
        accessor: "customer",
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
            className={
              value === "Pending"
                ? "text-orange-500 font-semibold"
                : value === "Completed"
                ? "text-green-500 font-semibold"
                : value === "Cancelled"
                ? "text-red-500 font-semibold"
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
        data={data}
        columns={columns}
        getTableProps={() => ({
          className: "w-full bg-white rounded-lg", // Table styling
        })}
        getHeaderProps={() => ({
          className: "bg-yellow-500 text-black font-bold text-lg p-2", // Yellow table header
        })}
        getCellProps={() => ({
          className: "p-4 border-b", // Cell styling
        })}
      />
    </div>
  );
};

export default RiderHistory;
