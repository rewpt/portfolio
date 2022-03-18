import React, { useState } from "react";
import Logo from "./Logo";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 5, duration: 2 },
  },
};

function Nav() {
  const [navOpen, setNavOpen] = useState(true);
  const chevronClass = classNames({
    "hover:cursor-pointer hover:text-orange mt-[20px]": navOpen,
    "hover:cursor-pointer hover:text-orange mt-[20px] rotate-180": !navOpen,
  });
  return (
    <div className="sticky top-[50px] overflow-visible ml-[30px] bg-opacity-0">
      <div className="absolute flex flex-col items-center w-[85px]">
        <Logo></Logo>
        <motion.nav
          className="w-[85px]"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex flex-col items-center">
            {navOpen && (
              <>
                <a href="#projects">
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faFolder}
                    />
                  </li>
                </a>
                <a href="#contact">
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faEnvelope}
                    />
                  </li>
                </a>
                <a target="_blank" href="https://www.github.com/rewpt">
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faGithub}
                    />
                  </li>
                </a>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1LvfcKpNCgrGiniY0qRUgVfzDgAr626ON/view?usp=sharing"
                >
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faFile}
                    />
                  </li>
                </a>
              </>
            )}
            <li
              className={chevronClass}
              onClick={() => {
                setNavOpen(!navOpen);
                console.log(navOpen);
              }}
            >
              <FontAwesomeIcon
                className=" h-[60px] w-[60px]"
                icon={faAngleUp}
              />
            </li>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}

export default Nav;
