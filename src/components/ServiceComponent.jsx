import React from "react";
import { FaConnectdevelop } from "react-icons/fa6";
import { TbShoppingCartCog } from "react-icons/tb";
import { RiSeoLine } from "react-icons/ri";
import { SiGooglecloud } from "react-icons/si";
import { SiHiveBlockchain } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";

const ServiceComponent = () => {
  const features = [
    {
      icon: <FaConnectdevelop />,
      title: "Design and Development",
      desc: "Elevate user experiences through meticulous design and seamless development, crafting intuitive solutions for today's digital landscape.",
    },
    {
      icon: <TbShoppingCartCog />,
      title: "E-commerce Solutions",
      desc: "Empower businesses with e-commerce solutions, facilitating seamless transactions for scalable growth in the digital marketplace.",
    },
    {
      icon: <RiSeoLine />,
      title: "Marketing and SEO",
      desc: "Drive visibility and engagement with strategic marketing and SEO tactics, optimizing online presence for maximum impact and growth.",
    },
    {
      icon: <SiGooglecloud />,
      title: "Google Cloud Solution",
      desc: "Unlock potential with Google Cloud solutions, driving innovation, scalability, and efficiency for businesses in the digital landscape.",
    },
    {
      icon: <SiHiveBlockchain />,
      title: "Blockchain Development",
      desc: "Unlock innovation with blockchain development, transforming industries through secure, transparent, and decentralized solutions.",
    },
    {
      icon: <GrTechnology />,
      title: "Expert AI Solution",
      desc: "Transform industries with expert AI solutions, revolutionizing processes and insights for unparalleled efficiency and innovation.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-10 air:px-6 m480:px-4">
        <div className="max-w-xl space-y-3">
          <h3
            className=" text-[#7f7f7f] font- font-mons
           text-lg font-medium"
          >
            Services
          </h3>
          <p className="text-black text-4xl sm:text-4xl font-int font-medium">
            Everything you need to grow
          </p>
          <p className="font-mons">
            Revolutionize industries with cutting-edge blockchain and app
            development solutions, ensuring innovation and efficiency in every
            project.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 grid-cols-3 m480:grid-cols-1">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-12 h-12 border shadow-lg text-black text-xl rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg font-int text-black font-semibold">
                  {item.title}
                </h4>
                <p className="font-mons">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
