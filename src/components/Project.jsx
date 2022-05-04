import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  h1Hover: { scale: 1.03 },
  icoHover: { scale: 1.05 },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
  titleInitial: { x: 0, opacity: 0 },
  titleAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },
  titleExit: { x: 0, opacity: 0, transition: { duration: 0.5 } },
};

export default function Project(props) {
  const { photos, stack, description, showDesc, setShowDesc, webLink, ghLink } =
    props;

  return (
    <div className="flex flex-col items-center">
      <div className="flex relative items-center">
        <div className="flex items-center h-[96vw] w-[95vw] max-h-[900px] max-w-[886px] mt-[1.5rem] drop-shadow-lg border-2 border-black justify-center bg-black overflow-hidden">
          <motion.img
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={photos[0]}
            alt=""
          />
        </div>
      </div>
      <motion.h2
        variants={variants}
        initial="titleInitial"
        animate="titleAnimate"
        exit="titleExit"
        className="mt-[20px] mx-[.5em] text-[1.3rem] flex"
      >
        <span className="flex-1">Crafted with:</span>
        <ul className="flex flex-wrap ">
          {stack.map((el, index) => {
            if (index !== stack.length - 1) {
              return (
                <li key={index} className="ml-[8px]">
                  {" "}
                  {el},{" "}
                </li>
              );
            } else {
              return (
                <li key={index} className="ml-[8px]">
                  {" "}
                  {el}{" "}
                </li>
              );
            }
          })}
        </ul>
      </motion.h2>
    </div>
  );
}
