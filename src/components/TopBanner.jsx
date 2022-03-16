import React from "react";
import Button from "./Button";
import face from "../images/cutout2.png";
import { useNavigate } from "react-router";

export default function TopBanner() {
  let navigate = useNavigate();
  return (
    <div className="h-[90vh] text-5xl flex flex-col justify-center items-center bg-slate-200">
      <div className="flex border-2 border-black overflow-hidden justify-center items-start rounded-full drop-shadow-xl h-[550px] w-[550px] mx-[100px] ring-white p-10 bg-slate-400 ">
        <img src={face} className="face h-[525px] max-w-none" alt="profile" />
      </div>
      <p className="w-[900px] mb-[50px] mt-10 mx-[100px]">
        Hi! My name is
        <span className="text-[orange]"> Zev Permack. </span> I build web apps
        to help improve the lives of others!
      </p>

      <Button
        onClick={() => {
          navigate("/projects");
        }}
      >
        Projects
      </Button>
    </div>
  );
}
