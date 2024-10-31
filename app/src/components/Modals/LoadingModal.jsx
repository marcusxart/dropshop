const LoadingModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md text-center">
        <p className="text-lg font-semibold">Awaiting Rider Acceptance</p>
        <p className="text-gray-600 mt-2">
          Your order is being processed. Please wait...
        </p>
        {/* Optionally add a spinner here */}
        <div className="loader mt-4"></div>{" "}
        {/* Simple loader, add your styles */}
      </div>
    </div>
  );
};

export default LoadingModal;
