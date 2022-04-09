import { useMediaQuery } from "../hooks/useMediaQuery";

export const logoVariants = () => {
  const useXlLogo = () => useMediaQuery('(min-width: 1250px)');
  const useLgLogo = () => useMediaQuery('(min-width: 900px)');
  const useMdLogo = () => useMediaQuery('(min-width: 650px)');


  const xlVariant = {
    hidden: { scale: 0.1, rotate: -180, x: "540px", y: "300px" },
    visible: {
      scale: 2,
      rotate: 0,
      x: "540px",
      y: "300px",
      transition: { duration: 1.5 },
    },
    exit: {
      x: 25,
    },
  }
  const lgVariant = {
    hidden: { scale: 0.1, rotate: -180, x: "30vw", y: "300px" },
    visible: {
      scale: 2,
      rotate: 0,
      x: "30vw",
      y: "300px",
      transition: { duration: 1.5 },
    },
    exit: {
      x: 25,
    },
  };
  const mdVariant = {
    hidden: { scale: 0.1, rotate: -180, x: "30vw", y: "300px" },
    visible: {
      scale: 2,
      rotate: 0,
      x: "30vw",
      y: "300px",
      transition: { duration: 1.5 },
    },
    exit: {
      x: 25,
    },
  };

  const svgVariants =
    
    

  const svgVariants2 = isXl
    ? {
        initial: { scale: 2, x: "540px", y: "300px" },
        animate: {
          scale: 1,
          x: "0vw",
          y: "0vh",
          type: "spring",
          ease: "easeInOut",
          transition: { duration: 2 },
        },
      }
    : {
        initial: { scale: 2, x: "30vw", y: "300px" },
        animate: {
          scale: 1,
          x: "0vw",
          y: "0vh",
          type: "spring",
          ease: "easeInOut",
          transition: { duration: 2 },
        },
      };

    }