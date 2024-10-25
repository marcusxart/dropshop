import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearRider } from "../../Global/rideSlic";

const RiderHeader = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const HandleLogout = () => {
    dispatch(clearRider());
    navigate("/rider-auth/rider-login");
  };

  return (
    <div className="w-full h-[14vh] flex px-5 items-center">
      <div className=" bg-[#111214BF] cursor-pointer w-full rounded h-[80%] px-4 max-md:w-[100%] max-md:h-[60%] flex justify-end gap-4 items-center">
        <p>Michael Jordan</p>

        <div
          className="w-[40px] h-[40px] rounded-full relative border flex justify-center items-center cursor-pointer"
          onClick={() => navigate("profile")}
        >
          <FaUser />
          <span className="w-[10px] h-[10px] rounded absolute top-1 left-8 bg-green-300"></span>
        </div>
        <MdLogout size={30} onClick={HandleLogout} />
      </div>
    </div>
  );
};

export default RiderHeader;
