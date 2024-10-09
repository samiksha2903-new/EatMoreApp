import React from 'react'
import EachItem from '../components/eachCard/EachItem'
import { useSelector } from "react-redux"
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom"

// it will show the details of the each Item i.e food.
const Item = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart.display);

  return (
    <div>
      <button
      onClick={() => navigate("/")}
      className='mt-8 mx-8 hover:bg-zinc-200 hover:rounded-full hover:p-3'><IoArrowBack className='text-2xl' /></button>
      <div className='min-h-[81vh] w-full bg-white flex justify-center'>
      {
        cartData ? <EachItem data={cartData}/> : <p>Fetching Data....</p>
      }
    </div>
    </div>
  )
}

export default Item