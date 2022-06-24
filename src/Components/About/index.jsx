import React from "react";
import { AboutData } from "../../utils/data";
const About = () => {
  return (
    <div className="flex flex-col mx-auto my-10">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">
          Our Strengths Versus Our Peers' Weaknesses
          <span className="text-orange-500">.</span>
        </p>
        <p className="text-sm font-medium text-orange-500">
          Short Introduction
        </p>
      </div>
      <div className="grid grid-cols-2 justify-items-center mx-56">
        <div className="flex flex-col">
          {AboutData?.leftContent?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-row m-2 p-5 h-[163px] w-[519px] shadow-md shadow-gray-400/30 justify-between align-middle items-center">
              <div>
                <div className="flex justify-center items-center bg-gray-400 w-[100px] h-[100px] scale-75 text-white my-auto">
                  {item?.icon}
                </div>
              </div>
              <div>{item?.msg}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {AboutData?.rightContent?.map((item) => (
            <div
              key={item?.id}
              className="flex flex-row m-2 p-5 h-[163px] w-[519px] shadow-lg shadow-orange-400/30 justify-between align-middle items-center">
              <div>
                <div className="flex justify-center items-center bg-orange-500 w-[100px] h-[100px] scale-75 text-white my-auto">
                  {item?.icon}
                </div>
              </div>
              <div>{item?.msg}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
