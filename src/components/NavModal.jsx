import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import openInNewTab from "./helpers/openNewTab";
import LogoStatic from "./LogoStatic";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
  },
};

export default function NavModal(props) {
  const { navOpen, setNavOpen, chevronClass, svgVariants } = props;
  return (
    <>
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className="absolute max-w-[300px] py-[1em] px-[1em] h-[100vh ] top-0 right-0 left-0 z-20 bg-gradient-to-r from-zpurple to-zlpurple flex flex-col drop-shadow-xl"
          >
            <div className="flex">
              <div
                className="h-[30vw] w-[25vw] max-h-[138px] max-w-[120px]"
                onClick={() => {
                  setNavOpen(false);
                }}
              >
                <LogoStatic />
              </div>
              <div
                className={chevronClass}
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
              >
                <FontAwesomeIcon
                  className="h-[15vw] w-[15vw] max-h-[60px] max-w-[60px] stroke-2 stroke-black "
                  icon={faAngleUp}
                />
              </div>
            </div>
            <a
              href="#projects"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <li className="modal-item-container">
                <FontAwesomeIcon className="modal-icon" icon={faFolder} />
                <span class="modal-text">Projects</span>
              </li>
            </a>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              href="#contact"
            >
              <li className="modal-item-container">
                <FontAwesomeIcon className="modal-icon" icon={faEnvelope} />
                <span class="modal-text">Contact</span>
              </li>
            </a>
            <div
              onClick={() => {
                openInNewTab("https://www.github.com/rewpt");
                setNavOpen(false);
              }}
            >
              <li className="modal-item-container">
                <FontAwesomeIcon className="modal-icon" icon={faGithub} />
                <span class="modal-text">Github</span>
              </li>
            </div>
            <div
              onClick={() => {
                openInNewTab(
                  "https://drive.google.com/file/d/1LvfcKpNCgrGiniY0qRUgVfzDgAr626ON/view?usp=sharing"
                );
                setNavOpen(false);
              }}
            >
              <li className="modal-item-container">
                <FontAwesomeIcon className="modal-icon" icon={faFile} />
                <span class="modal-text">Resume</span>
              </li>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
