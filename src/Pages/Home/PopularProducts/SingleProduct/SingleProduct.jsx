import React from "react";

const SingleProduct = ({ food }) => {
    const {country, img, title} = food;
  return (
    <div className="card ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-60 h-60" />
      </figure>
      <div className="card-body items-center text-center">
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
        <p className="text-xl my-1">{country} style</p>
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <div className="card-actions">
          <button className="btn btn-primary btn-sm font-bold px-12 mt-5">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
