import React, { useState } from "react";
import Logo from "./Logo";
import ghLogo from "../images/ghLogo.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 2 },
  },
};

function Nav() {
  const [navOpen, setNavOpen] = useState(true);
  const chevronClass = "hover:cursor-pointer hover:text-orange mt-[20px]";
  return (
    <div className="sticky top-0 overflow-visible ml-[20px] bg-opacity-0">
      <div className="absolute flex flex-col pt-[50px] w-[90px]">
        <Logo />
        <motion.nav
          className="w-[85px] mt-[20px]"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex flex-col ml-[10px]">
            <div className="flex flex-col text-xl">
              {navOpen && (
                <>
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faGithub}
                    />
                  </li>
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faEnvelope}
                    />
                  </li>
                  <li className="hover:cursor-pointer hover:text-orange mt-[20px]">
                    <FontAwesomeIcon
                      className=" h-[60px] w-[60px]"
                      icon={faFile}
                    />
                  </li>
                </>
              )}
              <li
                className="hover:cursor-pointer hover:text-orange mt-[20px]"
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
            </div>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}

export default Nav;
