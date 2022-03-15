import React from "react";
import Project from "./Project";
import catchlightHome from "../images/catchlight_home.png";

const catchlightPhotos = [catchlightHome];

export default function ProjectCarousel() {
  return (
    <div className="bg-red-200 flex flex-col justify-center items-center h-[80vh]">
      <Project photos={catchlightPhotos}> Catchlight </Project>
    </div>
  );
}
