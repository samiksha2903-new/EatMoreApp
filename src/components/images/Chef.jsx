import React from 'react'
import chefImage from './chef.png'

const Chef = () => {
  return (
    <div className='mx-6'>
        <img className='h-65 relative animate-float' src={chefImage} alt="img" />
    </div>
  )
}

export default Chef