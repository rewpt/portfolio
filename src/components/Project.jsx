import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
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
        className="flex"
      >
        <h1
          exit="titleExit"
          className="text-5xl mb-[50px] hover:cursor-pointer"
          onClick={() => {
            setShowDesc(!showDesc);
          }}
        >
          {props.children}
        </h1>
        {webLink && (
          <a
            class="webLink"
            target="_blank"
            href={webLink}
            aria-label="webLink"
          >
            <FontAwesomeIcon
              className=" h-[60px] w-[60px] ml-[15px] hover:cursor-pointer hover:text-[orange] "
              icon={faChrome}
            />
          </a>
        )}
        {ghLink && (
          <a class="webLink" target="_blank" href={ghLink} aria-label="webLink">
            <FontAwesomeIcon
              className=" h-[60px] w-[60px] ml-[15px]  hover:cursor-pointer hover:text-[orange] "
              icon={faGithub}
            />
          </a>
        )}
      </motion.div>
      {showDesc && (
        <motion.h2
          variants={variants}
          initial="titleInitial"
          animate="titleAnimate"
          exit="titleExit"
          className="mb-[50px] max-w-[800px] text-2xl"
        >
          {" "}
          {description}
        </motion.h2>
      )}

      <div className="flex items-center">
        <span
          onClick={decrementCarouselIndex}
          className="h-[80px] w-[80px] mr-[50px] hover:scale-[1.2] hover:cursor-pointer text-[#F47D48]"
        >
          <FontAwesomeIcon
            className="h-[80px] w-[80px] mr-[50px]"
            icon={faCaretLeft}
          />
        </span>

        <div className="flex drop-shadow-lg border-2 border-black justify-center bg-black h-[650px] w-[1100px] w-max-none overflow-hidden">
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
          className=" hover:cursor-pointer hover:scale-[1.2] text-[#F47D48]"
        >
          <FontAwesomeIcon
            className="h-[80px] w-[80px] ml-[50px]"
            icon={faCaretRight}
          />
        </span>
      </div>
      <motion.h2
        variants={variants}
        initial="titleInitial"
        animate="titleAnimate"
        exit="titleExit"
        className="mt-[20px] text-xl flex"
      >
        Crafted with:
        <ul className="flex ">
          {stack.map((el, index) => {
            if (index !== stack.length - 1) {
              return <li className="ml-[8px]"> {el}, </li>;
            } else {
              return <li className="ml-[8px]"> {el} </li>;
            }
          })}
        </ul>
      </motion.h2>
    </div>
  );
}
