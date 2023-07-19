import React from "react";

import rose from "../assets/images/rose.png";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="max-w-7xl ml-auto items-center mr-auto flex flex-col lg:flex-row w-full">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-4 max-w-xl"
      >
        <p className="text-4xl md:text-6xl font-bold ">
          We will help you grow your flowery projects
        </p>
        <p className="text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          reprehenderit in soluta, id ipsum molestiae. Error at ullam
          repellendus, esse labore facilis dolorum animi, commodi molestias quos
          nisi repudiandae nobis!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="w-full md:w-1/2"
      >
        <img src={rose} alt="rose" className="object-contain" />
      </motion.div>
    </div>
  );
};
