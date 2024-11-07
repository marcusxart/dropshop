import { Search } from "lucide-react";
import Table from "../components/Table";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllCustomers } from "../../Global/adminSlic";

const Customers = () => {
  const allCustomers = useSelector((state) => state.admin.customers);
  const admindata = useSelector((state) => state.admin.admin);

  const headers = {
    Authorization: `Bearer ${admindata.token}`,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllCustomers = async () => {
      const toastLoading = toast.loading("Please wait...");
      try {
        const response = await axios.get(
          "http://localhost:5000/api/getAllUsers",
          { headers }
        );
        dispatch(setAllCustomers(response.data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        toast.dismiss(toastLoading);
      }
    };

    getAllCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      Header: "Customer",
      accessor: "name",
      Cell: ({ value }) => (
        <div className="flex justify-center">
          <span className="text-[#f8c324] text-sm cursor-pointer">{value}</span>
        </div>
      ),
    },
    {
      Header: "Date Registered",
      accessor: "createdAt",
      Cell: ({ value }) => new Date(value).toLocaleDateString(),
    },
    {
      Header: "Email",
      accessor: "email",
    },

    {
      Header: "Total Orders",
      accessor: "totalOrders",
    },
  ];

  return (
    <div className="container">
      <div
        className="mb-4 flex items-center border rounded max-md:w-[98%] py-1
       border-[#f8c324] px-3 w-[50%]"
      >
        <Search />
        <input
          placeholder="Search Customer name..."
          className="p-2 w-[100%] max-md:w-[98%] px-3 outline-none border-gray-900 rounded bg-transparent"
        />
      </div>
      <Table columns={columns} data={allCustomers} />
    </div>
  );
};

export default Customers;
