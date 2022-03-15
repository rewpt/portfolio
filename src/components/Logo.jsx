import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180, y: "100vh" },
  visible: { rotate: 0, y: 0, x: 0, transition: { duration: 2 } },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export default function logo() {
  return (
    <motion.svg
      className="mx-[20px]"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100px"
      height="100px"
      viewBox="0 0 170.53 215.36"
    >
      <g>
        <motion.path
          class="st0"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="#F47D48"
          stroke="#000000"
          stroke-width="3"
          stroke-miterlimit="10"
          d="M49.58,195.12v19.24h23.09v-19.24H49.58z M140.11,39c-4.17,5.49-8.43,11-12.77,16.54
		c12.74,4.75,19.15,14.24,19.15,30.76c0,25.83-15.14,37.33-46.88,37.33H72.67V51.59h11.59c4.28-6.14,8.62-12.38,13.04-18.73H49.58
		V167.9c6.82,0.07,15.51,0.12,23.09,0.14v-25.68h29.85c16.31,0,30.53-3.02,41.62-9.22c2.02-1.12,3.93-2.36,5.74-3.7
		c12.42-9.22,19.65-23.49,19.65-43.14C169.53,61.12,158.52,46.4,140.11,39z"
        />
        <motion.path
          class="st1"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          fill="#74787A"
          stroke="#000000"
          stroke-width="3"
          stroke-miterlimit="10"
          d="M151.48,138.06l-0.67-0.16c-0.11,0.26-0.23,0.53-0.35,0.79c-4.91,11.31-10.84,21.74-16.52,27.41
		c-7.75,8.58-16.04,9.96-52.27,9.96h-1l-8.02-0.02c-12.18-0.06-23.38-0.25-31.07-0.55c-2.01-0.08-3.77-0.16-5.26-0.26
		c1.76-2.57,3.51-5.13,5.26-7.69v-41.29c-13.47,19.03-26.93,37.86-40.39,56.45l2.49,4.42h143.81c2.76-11.89,9.4-37.89,11.34-47.29
		L151.48,138.06z M28.02,28.66c5.81-8.57,9.95-10.23,34.57-10.23h54.48c-1.49,2.15-2.98,4.29-4.47,6.43
		c-3.38,4.87-6.76,9.72-10.13,14.57l-1.16,1.67c-2.05,2.95-4.09,5.89-6.12,8.79c-2.26,3.24-4.52,6.47-6.76,9.7h-0.01
		c-2.58,3.71-5.17,7.4-7.75,11.09v40.11c11.82-17.06,23.64-33.98,35.51-50.87c7.16-10.18,14.33-20.34,21.54-30.5
		c4.16-5.87,8.34-11.75,12.53-17.63l-2.21-4.43H36.32c-8.3,0-11.62,0.28-14.66-6.36h-7.19c-0.56,12.17-3.87,36.23-5.26,50.61
		l8.3,0.28C21.1,41.38,25.25,32.25,28.02,28.66z"
        />
      </g>
    </motion.svg>
  );
}
