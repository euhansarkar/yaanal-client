import React from "react";
import app from "../../../Assets/Images/app.png";
import { BsApple } from "react-icons/bs";
import {FaGooglePlay} from 'react-icons/fa'

const MobileApp = () => {
  return (
    <div className="hero bg-[#FEF2F2]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 flex justify-center">
          <img src={app} alt="" className="max-w-sm rounded-lg shadow-5xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold capitalize text-secondary">
            download our app
          </h3>
          <h1 className="text-4xl my-4 capitalize text-primary font-bold">
            it's all here <br /> all in one app !
          </h1>
          <p className="py-6 w-2/3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            mollitia maiores nostrum animi explicabo nobis voluptate.
          </p>
          <div className="flex items-center gap-6">
            <div className="bg-black rounded-md px-5 py-1">
              <h5 className="text-base-100 text-xs capitalize text-center">get it on</h5>
              <div className="flex items-center gap-x-1">
                <FaGooglePlay className="text-base-100 text-2xl" />
                <h2 className="text-md text-base-100 capitalize">app store</h2>
              </div>
            </div>
            <div className="bg-black rounded-md px-5 py-1">
              <h5 className="text-base-100 text-xs capitalize text-center">download on the</h5>
              <div className="flex items-center gap-x-1">
                <BsApple className="text-base-100 text-2xl" />
                <h2 className="text-md text-base-100 capitalize">app store</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
