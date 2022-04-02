import React from "react";
import Lightning from "../images/about/lightning.png";

export default function () {
  return (
    <div className="about-container">
      {/* <h2 className="believe-title">I believe in</h2> */}
      <ul className="keyword-container">
        <div className="relative keyword-item">
          <img
            className="absolute top-[-8vw] h-[15vw] max-h-[100px]"
            src={Lightning}
            alt="lightning bolt"
          />
          <h3 className="buzzword">Fast & scalable code</h3>
          <span className="buzz-desc">
            I build immersive apps with a seamless user experience
          </span>
        </div>
        <div className="keyword-item">
          <h3 className="buzzword">Agile Development</h3>
          <span className="buzz-desc">
            I work with customers to adjust and tweak until the product matches
            their vision
          </span>
        </div>
        <div className="keyword-item">
          <h3 className="buzzword">Responsive Layouts</h3>
          <span className="buzz-desc">
            I build apps to work across multiple platforms to use on any device
          </span>
        </div>
      </ul>
    </div>
  );
}
