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
    <div
      id="top-banner"
      className="flex justify-center h-[100vh] w-[100vw] bg-slate-200"
    >
      <motion.div
        className="flex flex-col w-[80%] justify-center items-center text-xl bg-slate-200"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex border-2 border-black overflow-hidden justify-center items-start rounded-full drop-shadow-xl h-[80vw] w-[80vw] max-h-[400px] max-w-[400px] p-10 bg-gradient-to-l from-[#11998E] to-[#119967] ">
          <img
            src={face}
            className="face h-[140%] w-[140%] max-h-[375px]  max-w-none"
            alt="profile"
          />
        </div>
        <p className=" mb-[50px] mt-10 text-[1.5rem]">
          Hi! My name is
          <span className="text-[orange]"> Zev Permack. </span> I build web apps
          to help improve the lives of others!
        </p>
        <a href="#projects">
          <Button>Projects</Button>
        </a>
      </motion.div>
    </div>
  );
}
