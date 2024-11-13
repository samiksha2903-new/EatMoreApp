import React from 'react'
import chefImage from './chef.png'

const Chef = () => {
  return (
    <div className='mx-6'>
        <img className='h-65 sticky top-40 animate-float' src={chefImage} alt="img" />
    </div>
  )
}

export default Chef