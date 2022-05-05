import React from "react";

import { MenuItem } from "./MenuItem";

const ProjectMenu = (props) => {
  const { allProjects, carouselIndex, setCarouselIndex } = props;

  return (
    <div className="proj-menu__container flex-col justify-center w-[50%]">
      <h1 className="proj-title">Projects</h1>
      <ul className="flex flex-col h-[100%] items-center">
        {allProjects.map((project, index) => {
          return (
            <MenuItem
              carouselIndex={carouselIndex}
              setCarouselIndex={setCarouselIndex}
              {...project}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectMenu;
