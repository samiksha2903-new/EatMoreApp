import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import FoodData from "../../data/foodData";
import { useDispatch } from "react-redux";
import { addToCart, Orders } from "../../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const EachItem = () => {
  const [DataItem, setData] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const item = FoodData.find((item) => item.id === parseInt(id));

    if (item) {
      setData(item);
    } else {
      return <p>No data found</p>;
    }
  }, [id]);

  const handleCartToast = () => toast.success(`${DataItem.name} Added`);

  const handleOrderClick = () => {
    dispatch(
      Orders({
        id: DataItem.id,
        img: DataItem.img,
        name: DataItem.name,
        price: DataItem.price,
        desc: DataItem.desc,
        category: DataItem.category,
        rating: DataItem.rating,
        qty: DataItem.qty || 1,
      })
    );
    navigate("/orderplaced");
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {DataItem ? (
        <div>
          <div className="card card-side h-96 shadow-xl mt-10 w-[70vw]">
            <figure>
              <img src={DataItem.img} alt="Movie" className="h-64" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{DataItem.name}</h2>
              <p className="w-[40rem] max-w-readable">{DataItem.desc}</p>
              <div className="flex gap-1 px-2 rounded items-center bg-green-500 w-14 text-white font-semibold">
                {DataItem.rating}
                <span>
                  {" "}
                  <FaStar className="text-yellow-400" />
                </span>
              </div>
              <p className="text-green-500  font-semibold text-xl">
                ₹ {DataItem.price}
              </p>
              <div className="card-actions justify-center">
                <button
                  onClick={() =>
                    {dispatch(
                      addToCart({
                        id: DataItem.id,
                        img: DataItem.img,
                        name: DataItem.name,
                        price: DataItem.price,
                        desc: DataItem.desc,
                        category: DataItem.category,
                        rating: DataItem.rating,
                      })
                    );
                    handleCartToast();
                  }
                  }
                  className="btn bg-orange-400 border-none text-white rounded-full px-20 font-semibold text-lg hover:bg-orange-500"
                >
                  Add to Cart
                </button>
                <button
                  onClick={(e) => handleOrderClick()}
                  className="btn bg-yellow-500 border-none text-white rounded-full px-20 text-lg hover:bg-yellow-400"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
};

export default EachItem;
