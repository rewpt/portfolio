import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import openInNewTab from "./helpers/openNewTab";
import LogoStatic from "./LogoStatic";
import { motion } from "framer-motion";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function NavModal(props) {
  const { navOpen, setNavOpen, chevronClass, svgVariants } = props;
  return (
    <>
      {navOpen && (
        <ul className="absolute w-[300px] py-[1em] px-[.5em] h-[100vh ] top-0 z-20 bg-gradient-to-r from-zpurple to-zlpurple flex flex-col drop-shadow-xl">
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
                className="h-[15vw] w-[15vw] max-h-[60px] max-w-[60px] stroke-2 stroke-black"
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
            <li className="hover:cursor-pointer text-zorange opacity-80 mt-[20px]">
              <FontAwesomeIcon className="h-[60px] w-[60px]" icon={faFolder} />
              <span>Projects</span>
            </li>
          </a>
          <a
            onClick={() => {
              setNavOpen(false);
            }}
            href="#contact"
          >
            <li className="hover:cursor-pointer text-zorange opacity-80 mt-[20px]">
              <FontAwesomeIcon
                className="h-[60px] w-[60px]"
                icon={faEnvelope}
              />
              <span>Contact</span>
            </li>
          </a>
          <div
            onClick={() => {
              openInNewTab("https://www.github.com/rewpt");
              setNavOpen(false);
            }}
          >
            <li className="hover:cursor-pointer text-zorange opacity-80 mt-[20px]">
              <FontAwesomeIcon className="h-[60px] w-[60px]" icon={faGithub} />
              <span>Github</span>
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
            <li className="hover:cursor-pointer text-zorange opacity-80 mt-[20px]">
              <FontAwesomeIcon className="h-[60px] w-[60px]" icon={faFile} />
              <span>Resume</span>
            </li>
          </div>
        </ul>
      )}
    </>
  );
}
