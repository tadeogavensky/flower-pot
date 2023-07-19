import React from "react";

import rose from "../assets/images/rose.png";

import { motion } from "framer-motion";

import amazon from "../assets/images/amazon.png";
import meta from "../assets/images/meta.png";
import twitter from "../assets/images/twitter.png";

export const Hero = () => {
  const clients = [amazon, meta, twitter];

  return (
    <div className="max-w-7xl ml-auto items-center mr-auto flex flex-col w-full">
      <div className=" flex flex-col items-center lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-4 max-w-xl  "
        >
          <p className="text-4xl md:text-6xl font-bold  text-white tracking-wider ">
            We will help you grow your <span className="text-[#f64944] leading-relaxed ">flowery</span> projects
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            reprehenderit in soluta, id ipsum molestiae. Error at ullam
            repellendus, esse labore facilis dolorum animi, commodi molestias
            quos nisi repudiandae nobis!
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

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <p>We played a key role in the business growth of our clients</p>
        <div>
          <div className=" mt-4 flex flex-row items-center flex-wrap">
            {clients.map((img, index) => {
              return (
                <div className="w-[100px]">
                  <img src={img} alt={index} className="object-cover w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
