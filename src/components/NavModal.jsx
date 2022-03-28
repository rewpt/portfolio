import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import openInNewTab from "./helpers/openNewTab";

export default function NavModal(props) {
  const { navOpen, setNavOpen } = props;
  return (
    <ul className="w-full top-0 z-20 bg-gradient-to-r from-zpurple to-zlpurple flex flex-col">
      {navOpen && (
        <>
          <a href="#projects">
            <li className="hover:cursor-pointer text-zorange opacity-80 mt-[20px]">
              <FontAwesomeIcon className="h-[60px] w-[60px]" icon={faFolder} />
              <span>Projects</span>
            </li>
          </a>
          <a href="#contact">
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
            }}
          >
            <li className="hover:cursor-pointer text-zorange opacity-80 mt-[20px]">
              <FontAwesomeIcon className="h-[60px] w-[60px]" icon={faFile} />
              <span>Resume</span>
            </li>
          </div>
        </>
      )}
    </ul>
  );
}
