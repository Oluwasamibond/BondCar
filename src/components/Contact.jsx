import { motion } from "framer-motion";
import React from "react";
import { slideUpVariants, zoomInVariants } from "../animation";


const Contact = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14">
      <motion.div 
       initial='hidden'
       whileInView='visible'
       variants = {slideUpVariants}
      className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Let's collaborate on your upcoming car rental
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quam
              voluptatibus nulla corrupti blanditiis tempore.
            </p>
          </div>
          <div className="grid place-items-center">
            <a
              href="#"
              className="inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider uppercase 
              hover:bg-primary/80 duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
