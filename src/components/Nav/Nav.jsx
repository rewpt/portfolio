import React from "react";
import logo from "../../images/logo.svg";
import Logo from "../Logo";

function Nav() {
  return (
    <nav className="bg-slate-200 sticky top-0 px-5 py-3">
      <ul className="flex justify-between">
        <div className="flex left-buttons ml-[20px]">
          <Logo />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="flex right-buttons">
          <li className="text-xl mr-[20px]">Projects</li>
          <li className="text-xl mr-[20px]">Contact</li>
          <li className="text-xl mr-[10px]">Github</li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
