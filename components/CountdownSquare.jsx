import React from "react";

const CountdownSquare = ({ value, label }) => {
  return (
    <div className="w-10 sm:w-12 md:w-16 lg:w-24 h-10 sm:h-12  md:h-16 lg:h-24 rounded-2xl bg-inherit  shadow-[0px_0px_20px_0px_rgba(249,115,22,1)] flex justify-center items-center space-x-2">
      <div className="text-orange-300 font-[Adventure] text-base sm:text-lg md:text-2xl lg:text-4xl font-bold">
        {value}
      </div>
      <div className="text-gray-500 sm:text-lg text-xs font-[Adventure] ">
        {label}
      </div>
    </div>
  );
};

export default CountdownSquare;
