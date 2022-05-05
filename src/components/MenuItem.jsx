import React from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const MenuItem = (props) => {
  const {
    name,
    description,
    ghLink,
    webLink,
    id,
    setCarouselIndex,
    carouselIndex,
  } = props;
  const changeCarouselIndex = (id) => {
    setCarouselIndex(id);
    console.log("id", id);
  };

  return (
    <li className="flex flex-col w-[80%] border-t-2 mb-[1em] mt-[1em] p-[1rem] border-y-black">
      <div className="menu-item-top w-full flex justify-between">
        <h2
          onClick={() => changeCarouselIndex(id)}
          className=" hover:cursor-pointer text-[2rem]"
        >
          {name}
        </h2>
        <motion.div className="project-link-container flex ">
          {webLink && (
            <motion.a
              variants={variants}
              whileHover="icoHover"
              className="webLink "
              href={ghLink}
              aria-label="webLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className=" h-[3rem] w-[3rem] hover:cursor-pointer hover:text-zorange "
                icon={faChrome}
              />
            </motion.a>
          )}
          {ghLink && (
            <motion.a
              variants={variants}
              whileHover="icoHover"
              className="ghLink ml-[.5em] "
              href={ghLink}
              aria-label="ghLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className=" h-[3rem] w-[3rem] hover:cursor-pointer hover:text-zorange "
                icon={faGithub}
              />
            </motion.a>
          )}
        </motion.div>
      </div>
      <div className="desc-container mt-[.5rem] w-[85%]">
        <p>{carouselIndex === id && description}</p>
      </div>
    </li>
  );
};
