import React from "react";
import Logo from "../Logo";
import ghLogo from "../../images/ghLogo.png";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delay: { duration: 2 },
    transition: { delay: 2, duration: 2 },
  },
};

function Nav() {
  return (
    <div className="sticky overflow-visible top-0 h-0 pl-[20px] bg-opacity-0">
      <div className="flex flex-col pt-[50px]">
        <Logo />
        <motion.nav variants={svgVariants} initial="hidden" animate="visible">
          <ul className="flex flex-col">
            <div className="flex flex-col text-xl ml-[20px] left-buttons">
              <img className="h-[80px] w-[80px]" src={ghLogo}></img>
              <li className="">Projects</li>
              <li className="">Contact</li>
              <li className="">Github</li>
            </div>
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}

export default Nav;
