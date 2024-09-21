import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car5.png";
import car3 from "../assets/car6.png";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";


const CarListData = [
  {
    name: "BMW UX",
    price: 100,
    image: car1,
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
  },
  {
    name: "BMW U",
    price: 100,
    image: car3,
  },
];
const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <motion.div 
       initial='hidden'
       whileInView='visible'
       variants = {slideUpVariants}
      className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Lorem, ipsum dolor{" "}
        </h1>
        <p className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          nisi.
        </p>
        <div>
          <motion.div 
           initial='hidden'
           whileInView='visible'
           variants = {zoomInVariants}
          className="grid grid-cols-1 sm:grid-cols- md:grid-cols-3 gap-16">
            {CarListData.map((data) => {
              return (
                <div className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                      src={data.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold">{data.name}</h1>
                    <div className="flex justify-between items-center text-xl font-semibold">
                      <p>${data.price}/Day</p>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3">
                    12km
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="grid place-content-center mt-8">
        <motion.button 
         initial='hidden'
         whileInView='visible'
         variants = {zoomInVariants}
        className="button-outline">Get Started</motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CarList;
