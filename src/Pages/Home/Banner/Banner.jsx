import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col gap-7 md:flex-row-reverse items-center my-10 mx-auto w-10/12">
      <div className="w-full flex justify-center">
      <img
        src="https://placeimg.com/260/400/arch"
        className="rounded-lg shadow-2xl w-full lg:w-10/12"
        alt=""
      />
      </div>

      <div className="w-full pl-20 hidden lg:block justify-center">
        <h2
          style={{ writingMode: `vertical-lr` }}
          className="text-7xl font-bold contrast-0"
        >
          $14.98
        </h2>
      </div>

      <div className="flex w-full my-5">
        <div>
          <h3 className="text-2xl text-primary font-semibold">now taking online order</h3>
          <h1 className="text-5xl font-bold text-primary uppercase">kebaba</h1>
          <p className="py-6 w-full">
            Rapidiously whiteboard cross-unit bandwidth whereas
            resource-leveling synergy. Intrinsicly benchmark standardized
            manufactured products via intermandated strategic theme areas.
            Intrinsicly fashion user-centric networks with interdependent
            catalysts for change. Interactively.
          </p>
          <div className="flex items-center gap-4">
            <button className="btn btn-primary">book a table</button>
            <button className="btn btn-secondary">add to cart</button>
          </div>
          <div className="flex items-center gap-16 my-10">
            <div>
              <h2 className="uppercase font-semibold text-2xl text-gray-900">
                lunch
              </h2>
              <p className="uppercase text-secondary">1:00-03:00pm</p>
            </div>
            <div>
              <h2 className="uppercase font-semibold text-2xl text-gray-900">
                dinner
              </h2>
              <p className="uppercase text-secondary">1:00-03:00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
