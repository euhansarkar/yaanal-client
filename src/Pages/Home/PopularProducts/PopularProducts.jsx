import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";

const PopularProducts = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`foods.json`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h2 className="text-primary text-center font-bold text-4xl capitalize">
        popular products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {foods.map((food) => (
          <SingleProduct food={food} key={food._id} ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
