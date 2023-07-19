import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menu = {
    closed: {
      scale: 0,
      transition: {
        delay: 0.15,
      },
    },
    open: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.4,
      },
    },
  };

  return (
    <nav className="p-6 border-b-[1px] border-gray-200 w-full relative md:fixed flex items-center justify-between md:justify-around">
      <h1>LOGO</h1>

      <ul className="hidden md:flex items-center gap-8">
        <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
          Home
        </li>
        <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
          Our Process
        </li>
        <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
          Services
        </li>
        <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
          Pricing
        </li>
      </ul>

      <button className="hidden md:block px-4 py-2 font-semibold rounded-md bg-green-400 text-white hover:bg-green-700 transition-all duration-200 ease-in-out">
        Contact us
      </button>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BiMenuAltRight size={30} className="block md:hidden" />
      </button>

      <div
        className={`flex flex-col items-start absolute top-20 ${
          isOpen ? "left-0" : "left-[100%]"
        } transition-all duration-200 ease-out  bg-white justify-center w-full  shadow-md md:hidden pl-4 gap-8 py-4`}
      >
        <ul className="flex flex-col gap-8  p-4 ">
          <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
            Home
          </li>
          <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
            Our Process
          </li>
          <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
            Services
          </li>
          <li className="text-sm cursor-pointer font-semibold  hover:text-green-400 transition-all duration-200 ease-in-out">
            Pricing
          </li>
        </ul>

        <button className="px-4 py-2 font-semibold rounded-md bg-green-400 text-white hover:bg-green-700 transition-all duration-200 ease-in-out">
          Contact us
        </button>
      </div>
    </nav>
  );
};
