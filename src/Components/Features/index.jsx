import React from "react";
import { FeaturesData } from "../../utils/data";

const Features = () => {
  return (
    <div className="flex flex-col mx-auto my-10">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">
          What We Do<span className="text-orange-500">.</span>
        </p>
        <p className="text-sm font-medium text-orange-500">
          Short Introduction
        </p>
      </div>
      <div className="grid grid-cols-3 mx-auto justify-items-center gap-10 my-14 ">
        {FeaturesData?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col justify-around align-middle items-center shadow-md shadow-orange-300/50 rounded-2xl text-center p-2 w-[230px] h-[222px]">
            <img alt={item?.name} src={item?.image} className="rounded-t-2xl" />
            <p className="flex p-2 justify-between align-middle ">
              {item?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
