import React from "react";
import Countdown from "./Countdown";

function MoviePosterTime() {
  const targetDate = new Date("2023-07-01T00:00:00Z");
  return (
    <div className="bg-gradient-to-t from-[#f8f377] to-[#f46f25] flex justify-between items-center">
      <img
        className=""
        src="https://i.postimg.cc/PJVNFnG9/indiana-jones-2-png-clipart-removebg-preview.png"
        alt=""
      />
      <div className="w-3/4 text-center space-y-4">
        <p className="text-8xl font-[Adventure]">
          Indiana Jones and the Dial of Destiny
        </p>
        {/* <div className="flex justify-center items-center space-x-4">
          <button className="text-xl border-black border-2 rounded-2xl py-1 px-3 hover:bg-[#f46f25] hover:border-[#f46f25] font-[Adventure]">
            Action
          </button>
          <button className="text-xl border-black border-2 rounded-2xl py-1 px-3 hover:bg-[#f46f25] hover:border-[#f46f25] font-[Adventure]">
            Adventure
          </button>
        </div> */}
        <p className="text-6xl font-[Adventure]">Coming Out In</p>
        <Countdown />
      </div>
    </div>
  );
}

export default MoviePosterTime;
