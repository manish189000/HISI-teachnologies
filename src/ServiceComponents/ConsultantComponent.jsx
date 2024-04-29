import React from "react";

const ConsultantComponent = () => {
  return (
    <>
      <div className="mainContainer bg-black py-16 px-10 w-[100%] flex items-center air:flex-col air:gap-20 air:px-6 m480:px-4">
        <div className="herocontent w-[60%] air:w-[100%] flex flex-col gap-8 m480:gap-6">
          <div className="empower text-[#7f7f7f] text-lg font-mons md:text-base">
            <p>Drop us a line! We are here to answer your questions 24/7</p>
          </div>
          <div className="build">
            <h1 className="text-white text-6xl font-medium font-int leading-[1.2] md:text-5xl">
              Need a consultation?
            </h1>
          </div>
          <div className="reachout font-int font-medium">
            <button className="bg-white px-3 py-2 rounded-lg text-black transition ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantComponent;
