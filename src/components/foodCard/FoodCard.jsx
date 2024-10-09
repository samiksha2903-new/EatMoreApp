import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, displayItem } from "../../redux/slices/CartSlice";

const FoodCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      displayItem({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        desc: props.desc,
        category: props.category,
        rating: props.rating,
      })
    );

    // Navigate to the item's page
    navigate(`/item/${props.id}`);
  };

  const cartHandle = () => {
    dispatch(
      addToCart({
        id: props.id,
        img: props.img,
        name: props.name,
        price: props.price,
        desc: props.desc,
        category: props.category,
        rating: props.rating,
      })
    );
    props.handleToast(props.name);
  }

  return (
    <div>
      <div
        className="card w-96 h-[25rem] shadow-md mb-7 hover:shadow-2xl"
      >
        <figure>
          <img
            src={props.img}
            alt="images"
            className="w-72 h-36 hover:scale-110 transition-all duration-500 ease-in-out cursor-grab"
          />
        </figure>
        <div className="card-body pt-3">
          <div onClick={(e) => handleClick()}>
          <h2 className="card-title text-slate-800">{props.name}</h2>
          <p className="line-clamp-2 break-words text-wrap text-gray-500 mt-2">{props.desc}</p>
          <p className="inline-flex items-center gap-1 bg-green-600 w-14 px-2 text-white rounded text-sm font-semibold mt-4">
            {props.rating}{" "}
            <span>
              <FaStar />
            </span>
          </p>
          <h3 className="font-semibold text-zinc-700 text-lg">
            ₹ <span>{props.price}</span>
          </h3>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => cartHandle()}
              className="btn bg-orange-500 text-white border-none text-[1rem]"
            >
              Add to Cart
            </button>
            {/* <button className="btn bg-yellow-500 text-[1rem] border-none text-white">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
