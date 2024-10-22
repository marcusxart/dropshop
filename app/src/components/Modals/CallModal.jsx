import toast from "react-hot-toast";
import { MdFileCopy } from "react-icons/md";

const CallModal = () => {
  const phoneNumber = "08159701004"; // The phone number to be copied

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Number copied to clipboard!");
  };

  return (
    <div className="w-full h-full rounded bg-[#0b0b0d] flex flex-col justify-center items-center">
      <div className="w-full h-[20%] flex justify-around px-3 items-center flex-col">
        <p className="text-2xl font-semibold">Please call your Client</p>
        <p className="text-center text-sm text-slate-400">
          Before you proceed you have 10 minutes to call your client
        </p>
      </div>
      <div className="w-full h-[50%] flex flex-col justify-center items-center">
        <p className="font-medium text-xl">Zayn Malik</p>
        <div className="w-full h-[30%] flex justify-center gap-3 items-center">
          <p className="text-2xl font-semibold text-[#f8c324]">{phoneNumber}</p>
          <MdFileCopy
            size={30}
            onClick={handleCopy}
            className="cursor-pointer"
          />
        </div>
        <button className="px-6 py-2 bg-gray-300 text-black font-semibold rounded-md">
          I have called
        </button>
      </div>
    </div>
  );
};

export default CallModal;
