import React, { useState, useEffect } from 'react'
import logo from "../images/logo.png"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { searchItem } from '../../redux/slices/SearchSlice'

const NavBar = () => {

  const [total, setTotal] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const shoppingCart = useSelector((state) => state.cart.cart);
  const newCart = Array.from(shoppingCart);

  useEffect(() => {
    const totalPrice = newCart.reduce((a, b) => a + (b.qty * b.price), 0)
    setTotal(totalPrice)
  }, [newCart]);

  const handleClick = (e) => {
    dispatch(searchItem((e.target.value).trim()))
  }

  return (
    <div>
        <div className="navbar shadow-xl bg-white">
  <div className="flex-1 ml-14"
  onClick={e => navigate("/")}
  >
    <img src={logo} className='h-12' alt="img-logo" />
    <a className="btn btn-ghost text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent ml-1 p-0">EatMore</a>
  </div>
  <div className="form-control">
      <input
      onKeyDown={(e) => handleClick(e)}
      type="text" placeholder="Search" className="input bg-slate-200 mr-20 w-full md:min-w-[38rem]" />
  </div>
  <div className="flex-none">
    <div
    onClick={e => navigate("/orders")}
    className='mr-7 btn btn-ghost btn-circle text-base text-gray-600'>
        <button>Orders</button>
    </div>
    <div className="dropdown dropdown-end mr-6">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className='text-base text-gray-600'>Cart</span>
          <span className="badge badge-sm indicator-item">{newCart.length || 0}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-white z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold text-gray-400">{newCart.length || 0} Items</span>
          <span className="text-slate-800 font-medium">Subtotal: ₹{total}</span>
          <div className="card-actions">
            <button onClick={e => navigate("/cart")} className="btn bg-amber-500 text-white border-none btn-block hover:bg-yellow-400">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar