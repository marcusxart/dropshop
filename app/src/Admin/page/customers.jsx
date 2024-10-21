import { Search } from "lucide-react";
import Table from "../components/Table";

// Sample data
const data = [
  {
    customer: "Jane Smith",
    dateRegistered: "2024-01-15",
    email: "jane.smith@example.com",
    mobileNumber: "+1 234 567 890",
    totalOrders: 5,
  },
  {
    customer: "John Doe",
    dateRegistered: "2024-02-10",
    email: "john.doe@example.com",
    mobileNumber: "+1 098 765 4321",
    totalOrders: 3,
  },
  // Add more customer data here...
];

const Customers = () => {
  const columns = [
    {
      Header: "Customer",
      accessor: "customer",
      Cell: ({ value }) => (
        <div className="flex justify-center">
          <span className="text-[#f8c324] text-sm cursor-pointer">{value}</span>
        </div>
      ),
    },
    {
      Header: "Date Registered",
      accessor: "dateRegistered",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Mobile Number",
      accessor: "mobileNumber",
    },
    {
      Header: "Total Orders",
      accessor: "totalOrders",
    },
  ];

  return (
    <div className="container px-3">
      <div
        className="mb-4 flex items-center border rounded max-md:w-[97%] py-1
       border-[#f8c324] px-3 w-[50%]"
      >
        <Search />
        <input
          placeholder="Search Customer name..."
          className="p-2 w-[100%] max-md:w-[98%] px-3 outline-none border-gray-900 rounded bg-transparent"
        />
      </div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default Customers;
