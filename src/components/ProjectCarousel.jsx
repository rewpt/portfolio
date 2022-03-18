import React, { useState } from "react";
import Project from "./Project";
import catchlightHome from "../images/catchlight_home.png";
import jungleHome from "../images/jungle-home.png";
import quizzAppHome from "../images/quizapp-home.png";
import { AnimatePresence } from "framer-motion";

const allProjects = [
  {
    name: "Catchlight",
    description: `A full scale social media movie app. Add friends 
    and see what they are watching. Start individual chats about 
    movies you share interest in and rate movies to share with all users.`,
    photos: [catchlightHome],
    stack: ["React", "Tailwind", "Express", "pSQL"],
    webLink: "http://catchlight-media.herokuapp.com",
    ghLink: "https://www.github.com/rewpt/catchlight",
  },
  {
    name: "Jungle",
    description: `A ruby on rails product purchasing platform. Browse
    available items, add them to your cart and checkout using Stripe. Includes
    admin restricted moderation features.`,
    photos: [jungleHome],
    stack: ["Ruby on Rails", "Stripe"],
  },
  {
    name: "Quiz-App",
    description: `An all in one quiz site allowing you to create and take quizzes.
    Take public quizzes made by all users of the site or create private quizzes
    to study by yourself.  
    `,
    photos: [quizzAppHome],
    stack: ["Ruby on Rails", "Stripe"],
  },
];

export default function ProjectCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = allProjects.length - 1;

  return (
    <>
      <div className="bg-slate-300 flex flex-col justify-center items-center min-h-[1100px] ">
        <div className="flex h-[900px] w-[900px] justify-center items-center">
          <AnimatePresence exitBeforeEnter>
            {allProjects.map((project, index) => {
              if (carouselIndex === index)
                return (
                  <Project
                    maxIndex={maxIndex}
                    carouselIndex={carouselIndex}
                    setCarouselIndex={setCarouselIndex}
                    key={index}
                    description={project.description}
                    photos={project.photos}
                    stack={project.stack}
                  >
                    {project.name}
                  </Project>
                );
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
