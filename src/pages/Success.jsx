import React, { useEffect, useState } from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center py-56">
      {loading ? (
        <PropagateLoader color="#36d7b7"/>
      ) : (
        <>
          <div className="flex justify-center gap-3">
            <h1 className="text-2xl text-gray-700 font-semibold">
              Order Placed Successfully
            </h1>
            <span>
              <PiSealCheckFill className="text-green-500 text-4xl" />
            </span>
          </div>
          <p className="mt-3">Your order has been placed successfully</p>
        </>
      )}
    </div>
  );
};

export default Success;
