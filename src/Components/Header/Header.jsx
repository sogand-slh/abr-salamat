import React from "react";
import TopHeader from "./TopHeader";
import HeroBg from "../../assets/Hero-bg.jpg";
import Vector from "../../assets/Vector.png";
//import styles
import "./Header.css";

// size of this section 1920*628
const Header = () => {
  return (
    <header className="m-3 ">
      <TopHeader />
      <div className="grid grid-cols-2 my-2">
        <div className="left-content">
          <div className="text-content">
            <p className="text-orange-500 opacity-100 font-medium">
              Introduction
            </p>
            <p className="text-2xl ">
              Your Strategy Is Only As Good As You Execute It
              <span className="text-orange-500">.</span>
            </p>
          </div>
        </div>
        <div>
          <img alt="Hero-bg" src={HeroBg} className="w-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
