import React from "react";

const CountdownSquare = ({ value, label }) => {
  return (
    <div className="w-24 h-24 rounded-2xl bg-white shadow-orange-600 shadow-inner flex justify-center items-center space-x-2">
      <div className="text-orange-300 font-[Adventure] text-4xl font-bold">
        {value}
      </div>
      <div className="text-gray-500 font-[Adventure] ">{label}</div>
    </div>
  );
};

export default CountdownSquare;
