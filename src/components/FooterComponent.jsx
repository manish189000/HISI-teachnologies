import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

const FooterComponent = () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Home",
    },
    {
      href: "javascript:void()",
      name: "About",
    },
    {
      href: "javascript:void()",
      name: "Service",
    },

    {
      href: "javascript:void()",
      name: "Contact",
    },

    // {
    //   href: "javascript:void()",
    //   name: "Support",
    // },
  ];
  return (
    <>
      <footer className="text-white bg-black px-10 py-16 max-w-screen-xl mx-auto md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <div className=" mx-auto text-white">
            <span className=" font-bakbak text-5xl">HISI</span>
            <span className=" font-bakbak text-3xl font-normal">
              Technologies
            </span>
          </div>
          <p className="leading-relaxed mt-3 text-[15px] text-white font-mons">
            Unlocking potential through cutting-edge solutions: Hisi Technology
            specializes in app and web development, alongside blockchain
            expertise. Partner with us to turn your vision into reality.
          </p>
        </div>
        <ul className="items-center justify-center text-[#7f7f7f] mt-8 flex space-x-4 space-y-0 font-mons">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-white">
              <a key={idx} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between flex sm:flex-col-reverse">
          <div className="mt-4 font-mons">
            <span className="text-white">&copy; 2024 </span>
            HiSi Technologies All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10  rounded-full bg-[#7f7f7f] flex items-center justify-center">
                <FaXTwitter className="w-5 h-5 text-white" />
              </li>

              <li className="w-10 h-10 rounded-full bg-[#7f7f7f] flex items-center justify-center">
                <FaInstagram className="w-5 h-5 text-white" />
              </li>

              <li className="w-10 h-10 rounded-full bg-[#7f7f7f] flex items-center justify-center">
                <FiFacebook className="w-5 h-5 text-white" />
              </li>

              {/* <li className="w-10 h-10 flex items-center justify-center">
               
              </li> */}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
