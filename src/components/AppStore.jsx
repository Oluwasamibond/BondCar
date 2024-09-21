import React from "react";
import pattern from "../assets/website/pattern.jpeg";
import PlayStoreImg from '../assets/website/play_store.png';
import AppStoreImg from "../assets/website/app_store.png";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";


const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};
const AppStore = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <motion.div 
       initial='hidden'
       whileInView='visible'
       variants = {slideUpVariants}
      className="container pt-14 pb-10">
        <div
          className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
          style={bannerImg}
        >
          <div>
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl text-center sm:text-4xl font-semibold font-serif">
                Get Started With Our App
              </h1>
              <p className="text-center sm:px-20">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                sint!
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <a href="#">
                <img
                  src={PlayStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={AppStoreImg}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppStore;
