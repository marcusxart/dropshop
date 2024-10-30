import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingModal from "./LoadingModal";

const CustomerOrderStatus = ({ orderStatus }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log(orderStatus);

  useEffect(() => {
    // Only hide loading and navigate if the order status changes to "in-progress"
    if (orderStatus === "in-progress") {
      // Hide the loading modal first
      setLoading(false);

      // Navigate to the on-going page after a brief timeout (optional)
      const timeout = setTimeout(() => {
        navigate("/user/on-going");
      }, 500); // This allows the loading modal to be visible for a brief moment

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timeout);
    } else {
      setLoading(true); // Reset loading state if not in-progress
    }
  }, [orderStatus, navigate]);

  return (
    <div>
      {loading ? (
        <LoadingModal /> // Show LoadingModal until rider accepts
      ) : (
        <div className="text-center p-4">
          <p className="text-green-600 text-lg font-semibold">{orderStatus}</p>
          <p className="text-gray-600 mt-2">
            The rider is on the way to complete your order.
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerOrderStatus;
