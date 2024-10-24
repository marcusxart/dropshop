import { useState } from "react";
import { MdSearch } from "react-icons/md";
import axios from "axios";
import Search from "../../assets/searchimg.svg";

const SearchModal = ({ onSelectLocation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "4de195ed33ca495b8e070cbc5c0b5f0c"; // Replace with your Geoapify API key

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);

    if (event.target.value.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${event.target.value}&apiKey=${API_KEY}`
        );
        setSearchResults(response.data.features);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleLocationSelect = (location) => {
    onSelectLocation(location);
  };

  return (
    <div className="w-[40rem] h-[35rem] bg-black max-md:w-[20rem]">
      <div className="w-full h-[40%] flex justify-center items-center">
        <div className="w-[90%] h-[50%] gap-2 flex justify-center items-start flex-col max-md:w-[100%]">
          <p className="font-semibold text-2xl max-md:text-xl">
            Search / Choose Pickup Location
          </p>
          <div className="w-[90%] flex justify-start px-2 rounded-md items-center h-[40%] border border-white max-md:w-full">
            <MdSearch size={30} />
            <input
              type="text"
              placeholder="Search for location, area, lat and long, plus code etc.."
              className="w-full px-2 h-[60%] rounded outline-none bg-transparent"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[50%] flex flex-col justify-start items-center overflow-y-auto">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : searchResults.length > 0 ? (
          <ul className="w-[90%] h-[90%] max-md:w-full bg-black rounded-lg p-4 overflow-auto">
            {searchResults.map((result, index) => (
              <li
                key={index}
                className="text-white py-2 border-b border-gray-500 cursor-pointer"
                onClick={() =>
                  handleLocationSelect(result.properties.formatted)
                }
              >
                {result.properties.formatted}
              </li>
            ))}
          </ul>
        ) : (
          <img
            src={Search}
            alt="Search illustration"
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
};

export default SearchModal;
