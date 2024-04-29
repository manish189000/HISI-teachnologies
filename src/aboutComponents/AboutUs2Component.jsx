import React from "react";

const AboutUs2Component = () => {
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
      <div className="mainContainer bg-white py-20 air:py-0 air:pt-12 air:pb-16 px-10 w-[100%] air:px-6 m480:px-4">
        <div className="empower pb-4 text-[#7f7f7f] text-lg font-mons md:text-base">
          <p>About Us</p>
        </div>
        <div className="build">
          <h1 className="text-black text-5xl font-medium font-int leading-[1.2] md:text-4xl">
            <span className="text-[#7f7f7f]">
              Empowering Businesses in the Digital Realm —&nbsp;
            </span>
            Embark on a Journey of Innovation, Collaboration, and Transformation
            with Our Passionate Team
          </h1>
        </div>
        <section className="py-16">
          <div className="max-w-screen-xl mx-auto ">
            <ul className="flex flex-row items-center justify-center gap-y-10 air:flex-wrap air:justify-around">
              {stats.map((item, idx) => (
                <li
                  key={idx}
                  className="text-center px-4 border-x-[1px] border-gray-600 text-black "
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

export default AboutUs2Component;
