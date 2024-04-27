import React from "react";
import { Typewriter } from "react-simple-typewriter";

import { useState, useEffect } from "react";
// import heroImg from "../images/heroimg.png";

import images1 from "../images/blockchain.jpg";
import images2 from "../images/ecommerce.jpg";
// import images3 from "../images/web-design.jpg";
import images4 from "../images/cloud.jpg";
import images5 from "../images/web-dev.jpg";
import images6 from "../images/ai-solutions.jpg";
const HeroSectionComponent = () => {
  const [index, setIndex] = useState(0); // Changed variable name 'initial' to 'index' and 'updateInitial' to 'setIndex'
  const images = [images1, images2, images4, images5, images6];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]); // Added dependency to re-trigger useEffect when the number of images changes

  const nextImage = () => {
    setIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const prevImage = () => {
    setIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };
  return (
    <>
      <div className="main-container bg-black pt-36 pb-36 px-10 w-[100%] flex items-center air:flex-col air:gap-20 air:px-6 m480:px-4">
        <div className="herocontent w-[60%] air:w-[100%] flex flex-col gap-8 m480:gap-6">
          <div className="empower text-gray-400 text-lg font-mons md:text-base">
            <p>Empowering tomorrow's innovators, our trusted agency</p>
          </div>
          <div className="build">
            <h1 className="text-white text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              specializes in bridging the digital landscape through cutting-edge
              solutions in
              <br />
              <Typewriter
                words={[
                  "AI",
                  "Blockchain",
                  "Google Cloud",
                  "E-commerce-solutions!",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                color="white" // Set text color to white
              />
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="bg-white px-3 py-2 rounded-lg text-black transition ease-in-out">
              Reach Out
            </button>
          </div>
        </div>
        <div className="image w-[40%] air:w-[100%]">
          <div>
            <img
              style={{ width: "100%", height: "auto" }}
              // width={1600}
              // height={200}
              src={images[index]}
              alt="hero-image"
            />
            {/* <button onClick={nextImage}>Next</button> */}
          </div>

          {/* <button onClick={prevImage}>Prev</button> */}
        </div>
      </div>
    </>
  );
};

export default HeroSectionComponent;
