import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAll } from "../../Global/adminSlic";

const AdminHeader = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(clearAll());
    navigate("/admin-auth/admin-login");
  };

  return (
    <div className="w-full h-[14vh] flex justify-end px-9 items-center">
      <div className=" bg-[#111214BF] cursor-pointer w-[15%] rounded h-[80%] max-md:w-[60%] max-md:h-[60%] flex justify-center gap-4 items-center">
        <MdLogout size={30} onClick={HandleLogout} />
        <div
          className="w-[40px] h-[40px] rounded-full border flex justify-center items-center cursor-pointer"
          onClick={() => navigate("profile")}
        >
          <FaUser />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
