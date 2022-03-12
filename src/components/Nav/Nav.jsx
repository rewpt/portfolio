import React from "react";
import logo from "../../images/logo.svg";
function Nav() {
  return (
    <nav className="bg-slate-200 sticky top-0 px-5 py-3">
      <ul className="flex justify-between">
        <div className="flex left-buttons">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="flex right-buttons">
          <li>Projects</li>
          <li>Contact</li>
          <li>Github</li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
