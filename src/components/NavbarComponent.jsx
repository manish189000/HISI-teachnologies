import React from "react";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleSelect() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="main-container w-full my-4 fixed px-4 air:px-3 m480:px-2">
        <div className="navbar w-full border-[1px] bg-white border-black shadow-lg h-16 rounded-2xl flex justify-between px-4 items-center">
          <div className="logo">
            <Link to="/">
              <span className=" font-bakbak text-3xl">HISI</span>
              <span className=" font-bakbak text-xl font-normal">
                Technologies
              </span>
            </Link>
          </div>
          <div className="navOpts flex gap-16 font-int font-semibold text-base air:hidden">
            <Link
              to="/"
              className="hover:underline transition ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline transition ease-in-out cursor-pointer"
            >
              About
            </Link>
            <Link
              to="/service"
              className="hover:underline transition ease-in-out cursor-pointer"
            >
              Services
            </Link>
            <p className="hover:underline transition ease-in-out cursor-pointer ">
              Contact
            </p>
          </div>
          <div className="getstarted font-int air:hidden">
            <button className=" px-3 py-2 rounded-lg bg-black text-white transition ease-in-out">
              Get Started
            </button>
          </div>
          <div onClick={handleSelect} className="menuBtn hidden air:block">
            <LuMenu className="text-3xl" />
          </div>
        </div>
        {isOpen && (
          <div className="respMenuList font-int font-semibold text-sm px-4 py-4 mt-1 border-[1px] bg-white border-black shadow-lg rounded-2xl hidden air:block m480:py-6">
            <div className="list flex flex-col gap-4 items-end m480:items-center">
              <Link to="/" className="hover:underline transition ease-in-out">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:underline transition ease-in-out"
              >
                About
              </Link>
              <Link
                to="/service"
                className="hover:underline transition ease-in-out"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="hover:underline transition ease-in-out"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarComponent;
