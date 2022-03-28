import React, { useState } from "react";
import NavModal from "./NavModal";
import Logo from "./Logo";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import openInNewTab from "./helpers/openNewTab";

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
    "hover:cursor-pointer text-zorange": navOpen,
    "hover:cursor-pointer text-zorange rotate-180": !navOpen,
  });
  return (
    <nav className="flex flex-col px-[1em] w-full top-0 bg-gradient-to-r from-zpurple to-zlpurple">
      <div className="pt-[1em] flex items-start w-full bg-gradient-to-r from-zpurple to-zlpurple">
        <motion.div className="logo-container h-[30vw] w-[25vw] max-h-[138px] max-w-[120px]">
          <Logo></Logo>
        </motion.div>
        <motion.div
          className={chevronClass}
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <FontAwesomeIcon
            className="h-[15vw] w-[15vw] max-h-[60px] max-w-[60px] stroke-2 stroke-black"
            icon={faAngleUp}
          />
        </motion.div>
      </div>
      <motion.div
        className="w-full"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <NavModal navOpen={navOpen} setNavOpen={setNavOpen} />
      </motion.div>
    </nav>
  );
}

export default Nav;
