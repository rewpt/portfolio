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
    <section className="stack-container py-[3em] flex flex-col items-center bg-gradient-to-r from-slate-200 to-slate-100 ">
      <h2 className="stack-title">Tech Stack</h2>
      <div className="stack-images">
        {logos.map((logo) => {
          return (
            <div className="stack-img h-[30vw] w-[30vw] max-h-[200px] max-w-[200px]">
              <img className="h-full w-full" src={logo} alt="psql-logo" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
