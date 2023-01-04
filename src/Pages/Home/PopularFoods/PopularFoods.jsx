import React, { useEffect, useState } from "react";
import SingleFood from "./SingleFood/SingleFood";
import { CiLocationArrow1 } from "react-icons/ci";

const PopularFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`foods.json`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="my-8 mx-16">
      <h3 className="text-center capitalize font-bold text-3xl">
        popular menu
      </h3>
      <h2 className="text-center capitalize font-bold text-4xl text-primary">
        amazing food served <br /> with delicacy
      </h2>
      <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <SingleFood food={food} key={food._id}></SingleFood>
        ))}
      </div>
      <div className="flex justify-center my-12">
        <button className="btn btn-primary font-bold px-12">
          see all menu{" "}
          <CiLocationArrow1 className="p-1 rounded-lg font-bold text-3xl bg-white text-primary ml-3" />
        </button>
      </div>
    </div>
  );
};

export default PopularFoods;
