import React from "react";
import Button from "./Button";
import face from "../images/cutout2.png";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 5, duration: 2 },
  },
};

export default function TopBanner() {
  return (
    <div id="top-banner" className="top-banner-container ">
      <motion.div
        className="flex flex-col-reverse w-[80%] mb-[2rem] items-center opacity-0"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="#projects">
          <Button>Projects</Button>
        </a>
        <p className="top-banner-text text-center">
          Hi! My name is
          <span className="highlight-text"> Zev Permack. </span> I build web
          apps that grow your business!
        </p>
        <div className="flex justify-center items-end border-2 rounded-full border-black overflow-hidden drop-shadow-xl mt-[3rem] w-[75vw] h-[75vw] max-h-[400px] max-w-[400px] bg-gradient-to-r from-zgrullo to-zgrullo ">
          <img
            src={face}
            className="face h-[60vw] max-h-[350px] max-w-none"
            alt="profile"
          />
        </div>
      </motion.div>
    </div>
  );
}
