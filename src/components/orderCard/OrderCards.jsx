import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromOrders } from "../../redux/slices/CartSlice";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const OrderCards = () => {
  const dispatch = useDispatch();
  const orderedItems = useSelector((state) => state.cart.order);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {orderedItems.length > 0 && (
        <h1 className="text-2xl text-white bg-blue-500 rounded-sm pb-1 px-4 w-40 mb-8">
          Your Orders
        </h1>
      )}
      {orderedItems.length > 0 ? (
        orderedItems.map((item) => (
          <div key={item.id} className="card w-[70vw] h-[145px] card-side shadow-sm">
            <figure>
              <img className="p-3 w-36" src={item.img} alt={item.name} />
            </figure>
            <div className="card-body p-0">
              <div className="flex items-center w-full justify-between">
                <h2 className="card-title text-gray-700 font-normal">
                  {item.name}
                </h2>
                <h2 className="text-gray-700 text-base">₹ {item.price}</h2>
                <div>
                <p className="flex items-center justify-end mt-2 text-gray-900 font-semibold gap-2 text-[1.1rem]"><RiCheckboxBlankCircleLine className="text-green-500"/>Deliver will be in 1 hour</p>
                <p className="text-gray-400">Your Order has been placed.</p>
                </div>
              </div>
              <div>
                <p>Quantity: {item.qty}</p>
                <button
                  onClick={() => {dispatch(removeFromOrders({ id: item.id })); 
                  toast(`${item.name} Cancel`, {
                    icon: `❗`,
                  });
                }}
                  className="my-4 text-white bg-red-600 px-2 pb-1 rounded-sm hover:bg-red-500 hover:text-white"
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="my-40 text-lg text-gray-500">No orders placed yet.</p>
      )}
    </div>
  );
};

export default OrderCards;
