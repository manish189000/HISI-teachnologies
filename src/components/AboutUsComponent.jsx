import React from "react";

const AboutUsComponent = () => {
  const stats = [
    {
      data: "$4.8m",
      title: "In pure profits for our clients",
    },
    {
      data: "100%",
      title: "In pure profits for our clients",
    },
    {
      data: "#1",
      title: "In pure profits for our clients",
    },
    {
      data: "99%",
      title: "In pure profits for our clients",
    },
  ];
  return (
    <>
      <div className="mainContainer main-container bg-black py-20 px-10 w-[100%] air:px-6 m480:px-4">
        <div className="empower pb-4 text-gray-400 text-lg font-mons md:text-base">
          <p>About Us</p>
        </div>
        <div className="build">
          <h1 className="text-white text-5xl font-medium font-int leading-[1.2] md:text-4xl">
            <span className="text-gray-400">
              Empowering Businesses in the Digital Realm —&nbsp;
            </span>
            Embark on a Journey of Innovation, Collaboration, and Transformation
            with Our Passionate Team
          </h1>
        </div>
        <section className="py-14">
          <div className="max-w-screen-xl mx-auto ">
            <ul className="flex flex-row items-center justify-center gap-y-10 air:flex-wrap air:justify-around">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  className="text-center px-4 border-x-[1px] border-gray-600 text-white "
                >
                  <h4 className="text-4xl font-int">{item.data}</h4>
                  <p className="mt-3 font-mons">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsComponent;
