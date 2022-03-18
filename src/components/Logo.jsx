import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const svgVariants = {
  hidden: { scale: 1, rotate: -180, x: "45vw", y: "45vh" },
  visible: {
    scale: 3,
    rotate: 0,
    x: "42vw",
    y: "30vh",
    transition: { duration: 2 },
  },
  exit: {
    x: 25,
  },
};

const svgVariants2 = {
  initial: { scale: 3, x: "42vw", y: "30vh" },
  animate: {
    scale: 0.9,
    x: "0vw",
    y: "0vh",
    type: "spring",
    ease: "easeInOut",
    transition: { duration: 2 },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 3 },
  },
};

export default function Logo() {
  const [initialAnimation, setInitialAnimation] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setInitialAnimation(!initialAnimation);
    }, 3000);

    return () => {
      clearInterval(timeOut);
    };
  }, []);
  return (
    <>
      {initialAnimation && (
        <AnimatePresence>
          <motion.svg
            className="ml-[10px]"
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="61.43px"
            y="77.08px"
            viewBox="0 0 61.43 77.08"
          >
            <g>
              <motion.path
                className="st0"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                fill="#FFA522"
                stroke="#000000"
                strokeWidth="1"
                strokeMiterlimit="1"
                d="M18.21,69.31v6.77h8.13v-6.77H18.21z M50.07,14.37c-1.47,1.93-2.97,3.87-4.49,5.82
		c4.48,1.67,6.74,5.01,6.74,10.82c0,9.09-5.33,13.14-16.5,13.14h-9.48V18.8h4.08c1.51-2.16,3.03-4.36,4.59-6.59H18.21v47.52
		c2.4,0.02,5.46,0.04,8.13,0.05v-9.04h10.5c5.74,0,10.74-1.06,14.65-3.24c0.71-0.39,1.38-0.83,2.02-1.3
		c4.37-3.24,6.91-8.27,6.91-15.18C60.43,22.16,56.55,16.98,50.07,14.37z"
              />
              <motion.path
                className="st1"
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                fill="#F47D48"
                stroke="#000000"
                strokeWidth="1"
                strokeMiterlimit="1"
                d="M54.07,49.23l-0.24-0.06c-0.04,0.09-0.08,0.19-0.12,0.28c-1.73,3.98-3.81,7.65-5.81,9.65
		c-2.73,3.02-5.64,3.51-18.39,3.51h-0.35l-2.82-0.01c-4.29-0.02-8.23-0.09-10.93-0.19c-0.71-0.03-1.33-0.06-1.85-0.09
		c0.62-0.9,1.24-1.81,1.85-2.71V45.08c-4.74,6.7-9.48,13.32-14.21,19.87l0.88,1.56h50.61c0.97-4.18,3.31-13.33,3.99-16.64
		L54.07,49.23z M10.63,10.73c2.04-3.02,3.5-3.6,12.17-3.6h19.17c-0.52,0.76-1.05,1.51-1.57,2.26c-1.19,1.71-2.38,3.42-3.56,5.13
		l-0.41,0.59c-0.72,1.04-1.44,2.07-2.15,3.09c-0.8,1.14-1.59,2.28-2.38,3.41h0c-0.91,1.31-1.82,2.6-2.73,3.9v14.12
		c4.16-6,8.32-11.96,12.5-17.9c2.52-3.58,5.04-7.16,7.58-10.73c1.46-2.07,2.93-4.13,4.41-6.2l-0.78-1.56H13.55
		c-2.92,0-4.09,0.1-5.16-2.24H5.86C5.66,5.28,4.5,13.75,4.01,18.81l2.92,0.1C8.19,15.21,9.65,12,10.63,10.73z"
              />
            </g>
          </motion.svg>
        </AnimatePresence>
      )}
      {!initialAnimation && (
        <motion.svg
          className="ml-[10px] hover:cursor-pointer"
          variants={svgVariants2}
          initial="initial"
          animate="animate"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="61px"
          y="77px"
          viewBox="0 0 61.43 77.08"
        >
          <g>
            <path
              className="st0"
              fill="#FFA522"
              stroke="#000000"
              strokeWidth="1"
              strokeMiterlimit="1"
              d="M18.21,69.31v6.77h8.13v-6.77H18.21z M50.07,14.37c-1.47,1.93-2.97,3.87-4.49,5.82
		c4.48,1.67,6.74,5.01,6.74,10.82c0,9.09-5.33,13.14-16.5,13.14h-9.48V18.8h4.08c1.51-2.16,3.03-4.36,4.59-6.59H18.21v47.52
		c2.4,0.02,5.46,0.04,8.13,0.05v-9.04h10.5c5.74,0,10.74-1.06,14.65-3.24c0.71-0.39,1.38-0.83,2.02-1.3
		c4.37-3.24,6.91-8.27,6.91-15.18C60.43,22.16,56.55,16.98,50.07,14.37z"
            />
            <path
              className="st1"
              fill="#F47D48"
              stroke="#000000"
              strokeWidth="1"
              strokeMiterlimit="1"
              d="M54.07,49.23l-0.24-0.06c-0.04,0.09-0.08,0.19-0.12,0.28c-1.73,3.98-3.81,7.65-5.81,9.65
		c-2.73,3.02-5.64,3.51-18.39,3.51h-0.35l-2.82-0.01c-4.29-0.02-8.23-0.09-10.93-0.19c-0.71-0.03-1.33-0.06-1.85-0.09
		c0.62-0.9,1.24-1.81,1.85-2.71V45.08c-4.74,6.7-9.48,13.32-14.21,19.87l0.88,1.56h50.61c0.97-4.18,3.31-13.33,3.99-16.64
		L54.07,49.23z M10.63,10.73c2.04-3.02,3.5-3.6,12.17-3.6h19.17c-0.52,0.76-1.05,1.51-1.57,2.26c-1.19,1.71-2.38,3.42-3.56,5.13
		l-0.41,0.59c-0.72,1.04-1.44,2.07-2.15,3.09c-0.8,1.14-1.59,2.28-2.38,3.41h0c-0.91,1.31-1.82,2.6-2.73,3.9v14.12
		c4.16-6,8.32-11.96,12.5-17.9c2.52-3.58,5.04-7.16,7.58-10.73c1.46-2.07,2.93-4.13,4.41-6.2l-0.78-1.56H13.55
		c-2.92,0-4.09,0.1-5.16-2.24H5.86C5.66,5.28,4.5,13.75,4.01,18.81l2.92,0.1C8.19,15.21,9.65,12,10.63,10.73z"
            />
          </g>
        </motion.svg>
      )}
    </>
  );
}
