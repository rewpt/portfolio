import React from "react";

const ProjectMenu = (props) => {
  const { allProjects } = props;
  return (
    <div className="proj-menu__container w-[50%]">
      {allProjects.map((proj) => {
        return <li>{proj.name}</li>;
      })}
      <ul></ul>
    </div>
  );
};

export default ProjectMenu;
