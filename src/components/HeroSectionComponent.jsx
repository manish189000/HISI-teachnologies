import React from "react";
import heroImg from "../images/heroimg.png";
const HeroSectionComponent = () => {
  return (
    <>
      <div className="main-container bg-black pt-36 pb-36 px-10 w-[100%] flex items-center air:flex-col air:gap-20 air:px-6 m480:px-4">
        <div className="herocontent w-[60%] air:w-[100%] flex flex-col gap-8 m480:gap-6">
          <div className="empower text-gray-400 text-lg font-mons md:text-base">
            <p>Empowering Tomorrow's Innovators</p>
          </div>
          <div className="build">
            <h1 className="text-white text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Building Bridges in the Digital Landscape: Your Trusted Agency
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="bg-white px-3 py-2 rounded-lg text-black transition ease-in-out">
              Reach Out
            </button>
          </div>
        </div>
        <div className="image w-[40%] air:w-[100%]">
          <div className="imageContainer">
            <img src={heroImg} className="rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionComponent;
