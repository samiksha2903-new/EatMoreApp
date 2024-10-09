import React, { useEffect, useState } from "react";
import FoodData from "../../data/foodData";
import { useDispatch } from "react-redux"
import { mealCategory } from "../../redux/slices/CategorySlice";

const MealBtns = () => {
  const [meal, setMeal] = useState([]);
  const dispatch = useDispatch();

  const handleClick = (val) => {
    dispatch(mealCategory((val).toLowerCase()));
  }

  const listCategories = () => {
    const list = [
      ...new Set(FoodData.map((food) => food.category))
    ]
    setMeal(list);
  }

  useEffect(() => {
    listCategories();
  }, [])

  return (
    <div className="m-16">
        <h1 className="text-slate-700 font-semibold text-lg my-3">Find your preferences</h1>
        <div className="flex gap-5">
      <button onClick={(e) => handleClick("all")} className="btn rounded-full bg-white hover:bg-orange-500 hover:text-white text-black border-orange-500 text-md font-semibold border-2 hover:border-orange-500 px-5">
        All
      </button>
      {
        meal.map((item) => (
          <button key={item} onClick={(e) => handleClick(item)} className="btn rounded-full bg-white hover:bg-orange-500 hover:text-white text-black border-orange-500 text-md font-semibold border-2 hover:border-orange-500 px-5">
        {item}
      </button>
        ))
      }
    </div>
    </div>
  );
};

export default MealBtns;
