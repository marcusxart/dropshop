import { MdSearch } from "react-icons/md";
import Search from "../../assets/searchimg.svg";
const SearchModal = () => {
  return (
    <div className=" w-[40rem] h-[35rem] bg-black max-md:w-[20rem]">
      <div className="w-full h-[40%] flex justify-center items-center">
        <div className="w-[90%] h-[50%] gap-2 flex justify-center items-start flex-col max-md:w-[100%]">
          <p className=" font-semibold text-2xl max-md:text-xl">
            Search / Choose Pickup Location
          </p>
          <div className="w-[90%] flex justify-start px-2 rounded-md items-center h-[50%] border border-white max-md:w-full">
            <MdSearch size={30} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for location, area, lat and long, plus code etc.."
              className="w-full px-2 h-[60%] rounded outline-none bg-transparent"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[50%] flex justify-center items-center">
        <img src={Search} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default SearchModal;
