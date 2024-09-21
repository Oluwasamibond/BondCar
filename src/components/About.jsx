import React from "react";
import carPng1 from "../assets/car1.png";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";
const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-slate-100 duration-300 sm:min-h-[400px] sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            <motion.img 
             initial='hidden'
             whileInView='visible'
             variants = {zoomInVariants}
            src={carPng1} alt=""  className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"/>
          </div>
          <div>
            <motion.div 
             initial='hidden'
             whileInView='visible'
             variants = {slideUpVariants}
            className="space-y-5 sm:p-16 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              sed minima enim itaque sit! Impedit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, eos?
            </p>
            <motion.button 
             initial='hidden'
             whileInView='visible'
             variants = {zoomInVariants}
            className="button-outline">
                GetStarted
            </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
