import React from "react";

export default function () {
  return (
    <div className="about-container">
      <h2 className="believe-title">I believe in</h2>
      <ul className="keyword-container">
        <div className="keyword-item">
          <h3 className="buzzword">Fast & scalable code</h3>
          <span className="buzz-desc">
            I build immersive apps with a seamless user experience
          </span>
        </div>
        <div className="keyword-item">
          <h3 className="buzzword">Agile Development</h3>
          <span className="buzz-desc">
            I work with customers to adjust and tweak until the product matches
            the vision
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
