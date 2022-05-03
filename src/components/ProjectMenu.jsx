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
    <div className="proj-menu__container w-[50%]">
      {allProjects.map((proj) => {
        return (
          <>
            <motion.div className="project-link-container flex justify-end space-saver ">
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
            <li>{proj.name}</li>
          </>
        );
      })}
      <ul></ul>
    </div>
  );
};

export default ProjectMenu;
