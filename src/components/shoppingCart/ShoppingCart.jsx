import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  decrementQty,
  incrementQty,
} from "../../redux/slices/CartSlice";
import { IoIosInformationCircle } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

const ShoppingCart = ({ data }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQty({ id: data.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQty({ id: data.id }));
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card card-side rounded-none border-b-2 border-gray-200 w-full">
        <figure className="">
          <img
            className="h-36 w-48 m-2 image-full card-img-overlay"
            src={data.img}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-slate-700">{data.name}</h2>
            <div className="card-actions justify-end">
              <button
                onClick={() => {
                  dispatch(removeFromCart({ id: data.id }));
                  toast(`${data.name} Removed`, {
                    icon: `❗`,
                  });
                }}
                className="btn bg-white text-xl p-0 text-gray-800 px-2 hover:bg-inherit"
              >
                Remove
              </button>
            </div>
          </div>
          <p>Restaurant: Lorem, ipsum.</p>
          <p className="text-slate-800 font-semibold text-xl flex items-center">
            ₹{data.price}{" "}
            <span className="text-green-600 text-base ml-8 flex items-center gap-1">
              1 coupon & 1 offer applied{" "}
              <span>
                <IoIosInformationCircle />
              </span>
            </span>
          </p>
          <div className="flex items-center gap-3 mt-3">
            <span
              onClick={handleDecrement}
              className="font-semibold text-slate-700 text-2xl border-2 px-3 pb-1 rounded-md cursor-pointer"
            >
              -
            </span>
            <span className="border-2 px-4 text-slate-800 font-semibold">
              {data.qty}
            </span>
            <span
              onClick={handleIncrement}
              className="font-semibold text-slate-700 text-2xl border-2 px-2 pb-1 rounded-md cursor-pointer"
            >
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
