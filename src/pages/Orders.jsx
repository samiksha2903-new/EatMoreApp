import React from 'react'
import OrderCards from '../components/orderCard/OrderCards';

// it will show orders that have been placed.
const Orders = () => {

  return (
    <div className='min-h-[90vh] w-full bg-white py-16'>
      <div className='w-full flex justify-center'>
      <OrderCards />
      </div>
    </div>
  )
}

export default Orders