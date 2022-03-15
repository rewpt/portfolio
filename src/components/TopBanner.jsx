import React from "react";
import Button from "./Button";
import face from "../images/cutout2.png";
export default function TopBanner() {
  return (
    <div className="h-[70vh] text-5xl flex flex-col justify-center items-center bg-slate-200">
      <div className="flex overflow-hidden justify-center items-start rounded-full h-[550px] w-[550px] mx-[100px] ring-white p-10 bg-slate-400 ">
        <img src={face} className="face h-[525px] max-w-none" alt="profile" />
      </div>
      <p className="w-[900px] mb-5 mt-10 mx-[100px]">
        Hi! My name is
        <span className="text-[orange]"> Zev Permack. </span> I build web apps
        to help improve the lives of others!
      </p>

      <Button>Projects</Button>
    </div>
  );
}
