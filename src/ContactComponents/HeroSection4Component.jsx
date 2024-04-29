import React from "react";
import contact2 from "../images/contact2.jpg";
const HeroSection4 = () => {
  return (
    <>
      <div className="mainContainer bg-black pt-36 pb-36 px-10 w-[100%] flex items-center air:flex-col air:gap-20 air:px-6 m480:px-4">
        <div className="herocontent w-[60%] air:w-[100%] flex flex-col gap-8 m480:gap-6">
          <div className="empower text-[#7f7f7f] text-lg font-mons md:text-base">
            <p>Encourage curiosity, fuel innovation</p>
          </div>
          <div className="build">
            <h1 className="text-white text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Cultivating Connections in the Digital Landscape: Your Reliable
              Guide
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="bg-white px-3 py-2 rounded-lg text-black transition ease-in-out">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="image-container flex relative z-0 ">
        <img
          src={contact2}
          className="px-10 air:px-6 m480:px-4 -translate-y-16 w-[100%] md:w-[100%] mx-auto"
        />
      </div>
    </>
  );
};

export default HeroSection4;
