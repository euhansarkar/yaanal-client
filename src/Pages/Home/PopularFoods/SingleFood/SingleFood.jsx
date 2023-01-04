import React from "react";
import { BsHeart, BsShare } from "react-icons/bs";

const SingleFood = ({ food }) => {
  const { country, img, title, description, price } = food;
  return (
    <div className="card shadow-xl bg-base-100 ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-80 h-60" />
      </figure>
      <div className="card-body">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p className="w-1/2">
          {description.length > 40 ? description.slice(0, 40) : description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-xl">${price}</h2>
          </div>
          <div className="flex gap-3">
            <BsHeart className="p-1 rounded-lg font-bold text-3xl bg-primary text-white" />
            <BsShare className="p-1 rounded-lg font-bold text-3xl bg-secondary text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
