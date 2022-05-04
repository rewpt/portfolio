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

const ProjectMenu = (props) => {
  const { allProjects } = props;
  return (
    <div className="proj-menu__container flex-col justify-center w-[50%]">
      <ul className="flex flex-col h-[100%] items-center">
        {allProjects.map((proj) => {
          return (
            <li className="flex justify-center border-1 border-black">
              {proj.name}
              <motion.div className="project-link-container flex ">
                {proj.ghLink && (
                  <motion.a
                    variants={variants}
                    whileHover="icoHover"
                    className="webLink "
                    href={proj.ghLink}
                    aria-label="webLink"
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

              <motion.div className="project-link-container flex">
                {proj.webLink && (
                  <motion.a
                    variants={variants}
                    whileHover="icoHover"
                    className="webLink "
                    href={proj.ghLink}
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
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectMenu;
