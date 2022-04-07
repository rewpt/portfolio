import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import openInNewTab from "./helpers/openNewTab";
import LogoStatic from "./LogoStatic";
import { motion, AnimatePresence } from "framer-motion";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useIsLarge, useIsSmall } from "../hooks/useMediaQuery";
import classNames from "classnames";

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
  const isSmall = useIsSmall();
  const isLarge = useIsLarge();

  const modalContainer = classNames(
    {
      "absolute max-w-[300px] px-[1em] py-[1em] top-0 right-0 left-0 z-20 bg-gradient-to-r from-zlpurple to-zvlpurple flex flex-col drop-shadow-xl":
        isSmall,
    },
    {
      "absolute px-[1em] h-[150px] w-[1200px] py-[1em]top-[0px] right-0 z-20 bg-none flex flex-row items-center justify-center":
        isLarge,
    }
  );
  const justifyEnd = classNames({ "justify-end": isLarge }, { "": isSmall });

  useEffect(() => {
    if (isLarge) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  }, [isLarge, isSmall]);
  return (
    <>
      <AnimatePresence>
        {navOpen && (
          <motion.ul
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            className={`${modalContainer}`}
          >
            {isSmall && (
              <div className="flex justify-between">
                <div
                  className="h-[30vw] w-[25vw] max-h-[138px] max-w-[120px]"
                  onClick={() => {
                    setNavOpen(false);
                  }}
                >
                  <LogoStatic />
                </div>
                <div
                  className={"hover:cursor-pointer text-zorange"}
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
            )}
            {isLarge && <div className="spacer flex-1 "></div>}
            <a
              href="#projects"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <li className="modal-item-container">
                {isSmall && (
                  <FontAwesomeIcon className="modal-icon" icon={faFolder} />
                )}
                <span class="modal-text">Projects</span>
              </li>
            </a>

            <div
              onClick={() => {
                openInNewTab("https://www.github.com/rewpt");
                setNavOpen(false);
              }}
            >
              <li className="modal-item-container">
                {isSmall && (
                  <FontAwesomeIcon className="modal-icon" icon={faGithub} />
                )}
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
                {isSmall && (
                  <FontAwesomeIcon className="modal-icon" icon={faFile} />
                )}
                <span class="modal-text">Resume</span>
              </li>
            </div>
            <a
              onClick={() => {
                setNavOpen(false);
              }}
              href="#contact"
              className="flex-1"
            >
              <li className={`modal-item-container ${justifyEnd}`}>
                {isSmall && (
                  <FontAwesomeIcon className="modal-icon" icon={faEnvelope} />
                )}
                <span class="modal-text">Contact</span>
              </li>
            </a>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
