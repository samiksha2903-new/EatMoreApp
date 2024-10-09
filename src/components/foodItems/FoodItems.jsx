import React from "react";
import FoodCard from "../foodCard/FoodCard";
import FoodData from "../../data/foodData";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);

  const filteredFoodItems = FoodData.filter((food) => {
    if (category === "all") {
      return food.name.toLowerCase().includes(search);
    } else {
      return category === food.category.toLowerCase();
    }
  });

  const handleToast = (name) => toast.success(`${name} Added`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-3 gap-6">
        {filteredFoodItems.length === 0 ? (
          <p className="text-center text-xl font-normal text-gray-400 h-[60vh] w-full">
            No data available
          </p>
        ) : (
          filteredFoodItems.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              img={food.img}
              category={food.category}
              desc={food.desc}
              price={food.price}
              rating={food.rating}
              handleToast={handleToast}
            />
          ))
        )}
      </div>
    </>
  );
};

export default FoodItems;
