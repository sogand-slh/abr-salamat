import React from "react";

const TopHeader = () => {
  return (
    <nav className="flex flex-row justify-between ">
      <div className="p-2">LOGO</div>
      <div className="flex flex-row justify-between gap-5">
        <div className="p-2 hover:text-orange-500 after:text-orange-500">
          <a href="#">Home</a>
        </div>
        <div className="p-2 hover:text-orange-500 after:text-orange-500">
          <a href="#">Explore</a>
        </div>
        <div className="bg-orange-500 p-2 text-white">
          <a href="#">Get Started {">"} </a>
        </div>
      </div>
    </nav>
  );
};

export default TopHeader;
