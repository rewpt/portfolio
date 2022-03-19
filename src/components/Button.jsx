import React from "react";
import { motion } from "framer-motion";
const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "2px 10px 50px rgb(255,255,255)",
  },
};
export default function Button(props) {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap={{ scale: 1.05, y: 2 }}
      className="rounded py-[10px] px-[20px] bg-[orange] drop-shadow-md hover:drop-shadow-xl"
    >
      {props.children}
    </motion.button>
  );
}
