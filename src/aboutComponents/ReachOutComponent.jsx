import React from "react";

const ReachOutComponent = () => {
  return (
    <>
      <div className="mainContainer pt-36 pb-36 px-10 w-[100%] flex items-center air:flex-col air:gap-20 air:px-6 m480:px-4">
        <div className="herocontent w-[60%] air:w-[100%] flex flex-col gap-8 m480:gap-6">
          <div className="empower text-[#7f7f7f] text-lg font-mons md:text-base">
            <p>Reach out to us</p>
          </div>
          <div className="build">
            <h1 className="text-black text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Let’s create something awesome together
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="bg-black px-3 py-2 rounded-lg text-white transition ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReachOutComponent;
