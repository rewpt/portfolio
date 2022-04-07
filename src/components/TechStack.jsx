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
      <h2 className="stack-title">Tech Stack</h2>
      <div className="stack-images">
        <div className="react-container flex justify-center">
          <div className="stack-img h-[25vw] w-[25vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={ReactLogo} alt="logo" />
          </div>
        </div>
        <div className="javascript-tailwind-container flex justify-center">
          <div className="stack-img h-[25vw] w-[25vw] mx-[1.5rem] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={TailwindLogo} alt="logo" />
          </div>
          <div className="stack-img h-[25vw] w-[25vw] mx-[1.5rem] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={JsLogo} alt="logo" />
          </div>
        </div>
        <div className="ruby-psql-jest-container flex justify-center">
          <div className="stack-img h-[25vw] w-[25vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={RubyLogo} alt="logo" />
          </div>
          <div className="stack-img h-[30vw] mx-[3rem] w-[30vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={PsqlLogo} alt="logo" />
          </div>
          <div className="stack-img h-[25vw] w-[25vw] max-h-[160px] max-w-[160px]">
            <img className="h-full w-full" src={JestLogo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
