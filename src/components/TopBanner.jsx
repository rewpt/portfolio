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
      className="flex flex-col pt-[6rem] pb-[2rem] items-center w-[100vw] bg-gradient-to-r from-zpurple to-zlpurple "
    >
      <motion.div
        className="flex flex-col-reverse w-[80%] mb-[2rem] items-center opacity-0"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <a href="#projects">
          <Button>Projects</Button>
        </a>
        <p className=" mb-[1em] mt-10 text-zorange text-[1.5rem] max-w-[600px]">
          Hi! My name is
          <span className="text-zgreen font-bold"> Zev Permack. </span> I build
          web apps to help improve the lives of others!
        </p>
        <div className="flex justify-center items-end border-2 border-black overflow-hidden rounded-full drop-shadow-xl w-[80vw] h-[80vw] max-h-[400px] max-w-[400px] bg-gradient-to-r from-zburgundy to-zlburgundy ">
          <img
            src={face}
            className="face h-[60vw] max-h-[350px]  max-w-none"
            alt="profile"
          />
        </div>
      </motion.div>
    </div>
  );
}
