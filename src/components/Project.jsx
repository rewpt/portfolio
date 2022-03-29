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
  const {
    photos,
    stack,
    description,
    carouselIndex,
    setCarouselIndex,
    maxIndex,
    showDesc,
    setShowDesc,
    webLink,
    ghLink,
  } = props;
  const decrementCarouselIndex = () => {
    if (carouselIndex !== 0) setCarouselIndex((prev) => prev - 1);
    else {
      setCarouselIndex(maxIndex);
    }
  };
  const incrementCarouselIndex = () => {
    if (carouselIndex < maxIndex) setCarouselIndex((prev) => prev + 1);
    else {
      setCarouselIndex(0);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <motion.div
        variants={variants}
        initial="titleInitial"
        animate="titleAnimate"
        exit="titleExit"
        className="flex items-center"
      >
        <motion.h1
          variants={variants}
          whileHover="h1Hover"
          exit="titleExit"
          className="text-[2.2rem] hover:cursor-pointer"
          onClick={() => {
            setShowDesc(!showDesc);
          }}
        >
          {props.children}
        </motion.h1>
        {webLink && (
          <motion.a
            variants={variants}
            whileHover="icoHover"
            className="webLink"
            href={webLink}
            aria-label="webLink"
          >
            <FontAwesomeIcon
              className=" h-[3rem] w-[3rem] ml-[15px] hover:cursor-pointer hover:text-zorange "
              icon={faChrome}
            />
          </motion.a>
        )}
        {ghLink && (
          <motion.a
            variants={variants}
            whileHover="icoHover"
            className="webLink"
            href={ghLink}
            aria-label="webLink"
          >
            <FontAwesomeIcon
              className=" h-[3rem] w-[3rem] ml-[15px] hover:cursor-pointer hover:text-zorange "
              icon={faGithub}
            />
          </motion.a>
        )}
      </motion.div>
      {showDesc && (
        <motion.h2
          variants={variants}
          initial="titleInitial"
          animate="titleAnimate"
          exit="titleExit"
          className=" max-w-[800px] mt-[1rem] text-[1.1rem] italic"
        >
          {" "}
          {description}
        </motion.h2>
      )}

      <div className="flex items-center">
        <span
          onClick={decrementCarouselIndex}
          className="absolute left-1 z-20 hover:scale-[1.2] hover:cursor-pointer text-[#F47D48] opacity-50 -rotate-90"
        >
          <FontAwesomeIcon
            className="h-[10vw] w-[10vw] max-h-[60px] max-w-[60px]"
            icon={faAngleUp}
          />
        </span>

        <div className="h-[100vw] w-[95vw]flex mt-[1.5rem] drop-shadow-lg border-2 border-black justify-center bg-black overflow-hidden">
          <motion.img
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            src={photos[0]}
            alt=""
          />
        </div>

        <span
          onClick={incrementCarouselIndex}
          className="absolute flex-shrink right-1 z-20 hover:cursor-pointer hover:scale-[1.2] text-[#F47D48] opacity-50 rotate-90"
        >
          <FontAwesomeIcon
            className="h-[10vw] w-[10vw] max-h-[60px] max-w-[60px]"
            icon={faAngleUp}
          />
        </span>
      </div>
      <motion.h2
        variants={variants}
        initial="titleInitial"
        animate="titleAnimate"
        exit="titleExit"
        className="mt-[20px] text-[1rem] flex"
      >
        <span>Crafted with:</span>
        <ul className="flex ">
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
