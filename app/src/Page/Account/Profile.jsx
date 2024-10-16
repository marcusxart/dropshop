import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  const customer = useSelector((state) => state.customer.Customer);

  console.log(customer);

  return (
    <div className="w-full h-screen flex justify-center items-center scrollbar-hide overflow-y-scroll">
      <div className="w-[50%] h-[80%] bg-[#0B0C0D] rounded-lg max-md:w-[90%] max-md:h-[80%]">
        <div className="w-full h-[27%] flex justify-center gap-2 items-center max-md:h-[30%]">
          <div className="w-[90px] h-[90px] rounded-full border">
            <img src="" alt="" />
          </div>

          <div className="w-[30px] h-[30px] bg-[#f8c534] cursor-pointer rounded-full flex justify-center items-center">
            <FaRegEdit size={20} className="text-black" />
          </div>
        </div>
        <div className="w-full h-[23%]  flex justify-around items-center max-md:h-[15%]">
          <div className="w-[40%] h-[60%] flex flex-col justify-center items-start gap-1 max-md:h-[70%] ">
            <label htmlFor="" className=" font-semibold text-gray-500">
              First Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder={customer.name}
              readOnly
              className="w-full h-[90%] border rounded-md bg-transparent px-2 outline-none"
            />
          </div>
          <div className="w-[40%] h-[60%] flex flex-col justify-center items-start gap-1 max-md:h-[70%]">
            <label htmlFor="" className=" font-semibold text-gray-500">
              Last name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder={customer.name}
              readOnly
              className="w-full h-[90%] border rounded-md bg-transparent px-2 outline-none"
            />
          </div>
        </div>
        <div className="w-full h-[23%]   flex justify-around items-center max-md:h-[15%]">
          <div className="w-[40%] h-[60%] flex flex-col justify-center items-start gap-1 max-md:h-[70%]">
            <label htmlFor="" className=" font-semibold text-gray-500">
              Phone Number
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="1234567890"
              readOnly
              className="w-full h-[90%] border rounded-md bg-transparent px-2 outline-none"
            />
          </div>
          <div className="w-[40%] h-[60%] flex flex-col justify-center items-start gap-1 max-md:h-[70%]">
            <label htmlFor="" className=" font-semibold text-gray-500">
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder={customer.email}
              readOnly
              className="w-full h-[90%] border rounded-md bg-transparent px-2 outline-none"
            />
          </div>
        </div>
        <div className="w-full h-[20%] flex justify-center items-center">
          <button className="px-10 py-3 rounded-full text-black font-semibold bg-slate-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
