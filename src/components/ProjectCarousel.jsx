import React, { useState } from "react";
import Project from "./Project";
import catchlightHome from "../images/catchlight_home.png";
import jungleHome from "../images/jungle_home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const allProjects = [
  {
    name: "Catchlight",
    description: `A full scale social media movie app. Add friends 
    and see what they are watching. Start individual chats about 
    movies you share interest in and rate movies to share with all users.`,
    photos: [catchlightHome],
    stack: ["React", "Tailwind"],
  },
  {
    name: "Jungle",
    description: `A ruby on rails based product purchasing app. Find items
    to purchase and checkout with a credit card using stripe. Includes
    restricted routes for site administration`,
    photos: [jungleHome],
    stack: ["Ruby on Rails", "Stripe"],
  },
];

export default function ProjectCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = allProjects.length - 1;
  const decrementCarouselIndex = () => {
    if (carouselIndex !== 0) setCarouselIndex((prev) => prev - 1);
  };
  const incrementCarouselIndex = () => {
    if (carouselIndex < maxIndex) setCarouselIndex((prev) => prev + 1);
  };
  return (
    <>
      <div className="bg-slate-300 flex flex-col justify-center items-center min-h-[1000px] ">
        <div className="flex h-[900px] w-[900px] justify-center items-center">
          <FontAwesomeIcon
            className="h-[80px] w-[80px] mr-[50px] hover:cursor-pointer text-[#F47D48]"
            icon={faCaretLeft}
            onClick={decrementCarouselIndex}
          />
          {allProjects.map((project, index) => {
            if (carouselIndex === index)
              return (
                <Project
                  key={index}
                  description={project.description}
                  photos={project.photos}
                  stack={project.stack}
                >
                  {project.name}
                </Project>
              );
          })}
          <span
            onClick={incrementCarouselIndex}
            className=" hover:cursor-pointer text-[#F47D48]"
          >
            <FontAwesomeIcon
              className="h-[80px] w-[80px] ml-[50px]"
              icon={faCaretRight}
            />
          </span>
        </div>
      </div>
    </>
  );
}
