import React from "react";
import PsqlLogo from "../images/tech-stack/psql-logo.png";
import ReactLogo from "../images/tech-stack/react480.png";
import JsLogo from "../images/tech-stack/js480.png";
import JestLogo from "../images/tech-stack/jest-icon.png";
import RubyLogo from "../images/tech-stack/ruby480.png";
import TailwindLogo from "../images/tech-stack/tailwind-css.png";

const logos = [PsqlLogo, ReactLogo, JsLogo, JestLogo, RubyLogo, TailwindLogo];

export default function techStack() {
  return (
    <section className="stack-container">
      <div className="flex flex-col bg-zbg drop-shadow-lg p-10">
        <h2 className="stack-title self-center">Tech Stack</h2>
        <div className="stack-images">
          <div className="stack-img h-[10vw] w-[10vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={ReactLogo} alt="logo" />
          </div>

          <div className="stack-img h-[10vw] w-[10vw] mx-[1.5rem] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={TailwindLogo} alt="logo" />
          </div>
          <div className="stack-img h-[10vw] w-[10vw] mx-[1.5rem] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={JsLogo} alt="logo" />
          </div>

          <div className="stack-img h-[10vw] w-[10vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={RubyLogo} alt="logo" />
          </div>
          <div className="stack-img h-[11vw] w-[11vw] mx-[3rem]  max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={PsqlLogo} alt="logo" />
          </div>
          <div className="stack-img h-[10vw] w-[10vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={JestLogo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
