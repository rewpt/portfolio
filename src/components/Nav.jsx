import React, { useState } from "react";
import NavModal from "./NavModal";
import Logo from "./Logo";
import classNames from "classnames";
import { motion } from "framer-motion";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 5, duration: 2 },
  },
};

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const chevronClass = classNames({
    hidden: navOpen,
    "hover:cursor-pointer text-zorange rotate-180": !navOpen,
  });
  return (
    <nav className="flex flex-col items-center w-full top-0 bg-gradient-to-r from-zpurple to-zlpurple">
      <div className="pt-[1em] px-[1em] max-w-[1200px] bg-opacity-0 flex justify-between items-start w-full">
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
        className="w-full px-[1em] absolute top-0 max-w-[1200px] bg-opacity-0 flex justify-between items-start"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <NavModal
          chevronClass={chevronClass}
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          svgVariants={svgVariants}
        />
      </motion.div>
    </nav>
  );
}

export default Nav;
