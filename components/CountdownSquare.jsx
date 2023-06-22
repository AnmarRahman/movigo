import React from "react";

const CountdownSquare = ({ value, label }) => {
  return (
    <div className="w-24 h-24 rounded-2xl bg-gray-800 flex flex-col justify-center items-center">
      <div className="text-white font-[Adventure] text-4xl font-bold">
        {value}
      </div>
      <div className="text-gray-500 font-[Adventure] ">{label}</div>
    </div>
  );
};

export default CountdownSquare;
