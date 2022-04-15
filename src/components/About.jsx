import React from "react";
import Agile from "../images/about/agileai.png";
import Responsive from "../images/about/responsiveai.png";
import Bolt from "../images/about/boltai.png";

export default function () {
  return (
    <div className="about-container">
      {/* <h2 className="believe-title">I believe in</h2> */}
      <ul className="keyword-container">
        <div className="keyword-item">
          <div className="h-[20vw] w-[15.4vw] max-w-[90px] max-h-[70px] mb-[1rem]">
            <img className="" src={Bolt} alt="" />
          </div>
          <h3 className="buzzword">Fast & scalable code</h3>
          <span className="buzz-desc">
            I build immersive apps with a seamless user experience
          </span>
        </div>
        <div className="keyword-item">
          <div className="h-[20vw] w-[20vw] max-w-[90px] max-h-[70px] mt-[1rem] mb-[1rem]">
            <img src={Agile} alt="" />
          </div>
          <h3 className="buzzword">Agile Development</h3>
          <span className="buzz-desc">
            I work with customers to adjust and tweak until the product matches
            their vision
          </span>
        </div>
        <div className="keyword-item drop-shadow-sm">
          <div className="h-[20vw] w-[20vw] max-w-[90px] max-h-[70px] mt-[1rem] mb-[1rem]">
            <img src={Responsive} alt="" />
          </div>
          <h3 className="buzzword">Responsive Layouts</h3>
          <span className="buzz-desc">
            I build apps to work across multiple platforms to use on any device
          </span>
        </div>
      </ul>
    </div>
  );
}
