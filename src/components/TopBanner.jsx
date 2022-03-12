import React from "react";
import Button from "./Button";
import face from "../images/face.png";
export default function TopBanner() {
  return (
    <div className="h-[90vh] text-5xl flex flex-col justify-center items-center align-center bg-slate-200">
      <div className="flex justify-center items-center ring-6 h-[500px] w-[500px] ring-white p-10 bg-slate-400 rounded-full">
        <img src={face} className="face" alt="logo" />
      </div>
      <p className="mb-5 mt-10">
        Hi! My name is
        <span className="text-[orange]"> Zev Permack. </span> I build web apps
        to help improve the lives of others!
      </p>

      <Button>Projects</Button>
    </div>
  );
}
