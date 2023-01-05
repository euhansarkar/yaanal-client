import React from "react";
import user1 from "../../../../Assets/Images/user1.jpg";
import user2 from "../../../../Assets/Images/user2.jpg";

const SingleTestimonital = () => {
  return (
    <div className="flex justify-center my-8 mx-16 gap-12">
      <div className="flex w-1/2 justify-center gap-3">
        <div className="w-1/2">
          <img src={user1} className="w-12 rounded-sm mt-3" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-2xl capitalize">natasha mailik</h2>
          <h4 className="font-semibold text-xl capitalize brightness-200">indian</h4>
          <div className="flex items-center justify-between">
            <div className="rating rating-sm">
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-amber-500"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
            </div>
            <div>
              <h2 className="font-semibold">19/09/2022</h2>
            </div>
          </div>
          <div>
            <p>
              Uniquely disseminate ubiquitous functionalities with corporate
              experiences. Efficiently aggregate world-class processes via
              effective models. Dramatically evolve B2B imperatives rather than
              competitive ROI. Compellingly fabricate seamless solutions for
              24/365 architectures. Authoritatively synthesize web-enabled
              convergence after bricks-and-clicks portals. Objectively exploit
              cooperative infrastructures and an expanded array of leadership
              skills. Distinctively simplify goal-oriented.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-1/2 justify-center gap-3">
        <div className="w-1/2">
          <img src={user2} className="w-12 rounded-sm mt-3" alt="" />
        </div>
        <div>
          <h2 className="font-bold text-2xl capitalize">Anny Keaty</h2>
          <h4 className="font-semibold text-xl capitalize brightness-200">Austrian</h4>
          <div className="flex items-center justify-between">
            <div className="rating rating-sm">
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star bg-amber-500"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
              <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" />
            </div>
            <div>
              <h2 className="font-semibold">19/09/2022</h2>
            </div>
          </div>
          <div>
            <p>
              Uniquely disseminate ubiquitous functionalities with corporate
              experiences. Efficiently aggregate world-class processes via
              effective models. Dramatically evolve B2B imperatives rather than
              competitive ROI. Compellingly fabricate seamless solutions for
              24/365 architectures. Authoritatively synthesize web-enabled
              convergence after bricks-and-clicks portals. Objectively exploit
              cooperative infrastructures and an expanded array of leadership
              skills. Distinctively simplify goal-oriented.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonital;
