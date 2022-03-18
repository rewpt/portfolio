import React from "react";
import Button from "./Button";
import face from "../images/cutout2.png";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 5, duration: 2 },
  },
};

export default function TopBanner() {
  let navigate = useNavigate();
  return (
    <div
      id="top-banner"
      className="h-[90vh] flex items-center justify-center text-5xl  bg-slate-200"
    >
      <motion.div
        className="flex flex-col justify-center items-center"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex border-2 border-black overflow-hidden justify-center items-start rounded-full drop-shadow-xl h-[550px] w-[550px] ring-white p-10 bg-gradient-to-l from-[#11998E] to-[#119967] ">
          <img src={face} className="face h-[525px] max-w-none" alt="profile" />
        </div>
        <p className="w-[900px] mb-[50px] mt-10 mx-[100px]">
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
