import React from "react";
import { motion } from "framer-motion";
const buttonVariants = {
  hover: {
    scale: 1.1,
  },
};
export default function Button(props) {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap={{ scale: 1.04, y: 2 }}
      className="rounded text-[1.6rem] py-[.4em] px-[.8em] bg-zorange text-zpurple drop-shadow-md hover:drop-shadow-xl"
    >
      {props.children}
    </motion.button>
  );
}
