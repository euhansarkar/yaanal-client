import React from "react";

const SpecialDIscounts = () => {
  return (
    <div className="card -mb-20 w-11/12 md:w-3/5  glass mx-auto border border-primary border-solid hover:border-accent">
      <div className="card-body items-center ">
        <h2 className="card-title font-semibold text-3xl capitalize">
          get special discounts
        </h2>
        <p className="font-semibold text-center my-3">
          input your email address and complete your subscription <br /> to get
          our sepcial offer!
        </p>
        <div className="card-actions justify-end">
          <div className="form-control">
            <label className="input-group">
              <input
                type="text"
                placeholder="euhansarkar@gmail.com"
                className="input focus:outline-none border-primary input-bordered"
              />
              <span className="bg-primary font-semibold text-white">
                Subscribe
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialDIscounts;
