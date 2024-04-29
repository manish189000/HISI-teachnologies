import React from "react";
import about2 from "../images/about2.jpg";
import about3 from "../images/about3.jpg";
const ImageSectionComponent = () => {
  return (
    <>
      <div className="mainContainer bg-black py-16 px-10 w-[100%] air:px-6 m480:px-4">
        <div className="imageContainer flex w-[100%]">
          <img src={about2} className="w-[50%]" />
          <img src={about3} className="w-[50%] p-[5vw]" />
        </div>
      </div>
      {/* air:p-10 p-14 md:p-9 sm2:p-6 m480:p-4 */}
    </>
  );
};

export default ImageSectionComponent;
