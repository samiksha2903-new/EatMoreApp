import React, { useState, useEffect } from "react";
import ShoppingCart from "../components/shoppingCart/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import EmptyGIF from "../components/images/EmptyGIF.gif";
import {Orders} from "../redux/slices/CartSlice"
import { useNavigate } from "react-router-dom"
import { removeWhenOrderPlaced } from "../redux/slices/CartSlice"

// shows items that we have added to the cart.
const Cart = () => {
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shoppingCart = useSelector((state) => state.cart.cart);
  const newCart = Array.from(shoppingCart);
  
  const handleOrders = () => {
    newCart.map((item) => 
    dispatch(Orders({id: item.id, name: item.name, img: item.img, price: item.price, qty: item.qty}))),
    navigate("/orderplaced"),
    dispatch(removeWhenOrderPlaced());
  }


  useEffect(() => {
    const totalPrice = newCart.reduce((a, b) => a + (b.qty * b.price), 0)
    setTotal(totalPrice)
  }, [newCart]);


  return (
    <div className="min-h-[90vh] w-full px-20 p-10">
      <h1 className="font-semibold text-3xl text-slate-600 mb-5">
        Shopping Cart
      </h1>
      {newCart.length >= 1 ? (
        <div className="w-full flex gap-8">
          <aside className="w-[80%] shadow-lg">
            {" "}
            {newCart.map((item) => (
              <ShoppingCart key={item.id} data={item} />
            ))}{" "}
          </aside>
          <aside className="w-[30%] shadow-lg h-[20%] p-5 flex flex-col">
            <h1 className="uppercase font-semibold border-b-2 border-slate-200 pb-3 text-gray-500">
              Cart Details
            </h1>
            <div className="flex justify-between text-slate-700 font-semibold py-4 my-5 text-lg">
              <span>SubTotal ({newCart.length || 0} items) :</span>
              <span className="mr-6">₹ {total}</span>
            </div>
            <button 
            onClick={handleOrders}
            className="btn bg-green-600 hover:bg-green-700 text-white border-none uppercase font-semibold  my-5 mx-5 rounded-full break-words tracking-wider">Place Order</button>
          </aside>
        </div>
      ) : (
        <div className="w-full min-h-[80vh] flex items-center justify-center">
          <img className="w-52" src={EmptyGIF} alt="empty cart" />
        </div>
      )}
    </div>
  );
};

export default Cart;
