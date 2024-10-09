import React from 'react'

// components
import MealBtns from "../components/mealBtns/MealBtns"
import Chef from "../components/images/Chef"
import FoodItems from "../components/foodItems/FoodItems"

const HomePage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-white p-0 m-0">
      <MealBtns />
      <div className="flex gap-8">
      <Chef />
      <FoodItems />
      </div>
    </div>
  )
}

export default HomePage