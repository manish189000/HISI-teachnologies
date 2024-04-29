import React from "react";
import hero2 from "../images/hero2.jpg";
const HeroSection2Component = () => {
  return (
    <>
      <div className="mainContainer -z-10 bg-black pt-36 pb-36 px-10 w-[100%] flex items-center air:px-6 m480:px-4">
        <div className="herocontent w-[70%] air:w-[100%] flex flex-col gap-8 m480:gap-6">
          <div className="empower text-[#7f7f7f] text-lg font-mons md:text-base">
            <p>Inspiring the Next Generation</p>
          </div>
          <div className="build">
            <h1 className="text-white text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              The Ambitious Team Leading the Charge Towards Tomorrow's Triumphs
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="bg-white px-3 py-2 rounded-lg text-black transition ease-in-out">
              Join the team
            </button>
          </div>
        </div>
      </div>
      <div className="image-container flex relative z-0 ">
        <img
          src={hero2}
          className="px-10 air:px-6 m480:px-4 -translate-y-16 w-[100%] md:w-[100%] mx-auto"
        />
      </div>
    </>
  );
};

export default HeroSection2Component;
