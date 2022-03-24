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
      whileTap={{ scale: 1.05, y: 2 }}
      className="rounded text-[1.5rem] py-[.5em] px-[1em] bg-zorange drop-shadow-md hover:drop-shadow-xl"
    >
      {props.children}
    </motion.button>
  );
}
