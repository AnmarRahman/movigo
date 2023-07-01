import React from "react";
import Countdown from "./Countdown";

function MoviePosterTime() {
  return (
    <div className="bg-[url('https://i.postimg.cc/XYJN4PMF/indianajonesdarkwallpaper.jpg')] bg-cover flex justify-between items-center h-[700px]">
      <div className="w-1/2 text-center space-y-4">
        <p className="text-9xl font-[Adventure] bg-gradient-to-b from-yellow-300 to-orange-600 text-transparent bg-clip-text">
          Indiana jones V
        </p>
        {/* <div className="flex justify-center items-center space-x-4">
          <button className="text-xl border-black border-2 rounded-2xl py-1 px-3 hover:bg-[#f46f25] hover:border-[#f46f25] font-[Adventure]">
            Action
          </button>
          <button className="text-xl border-black border-2 rounded-2xl py-1 px-3 hover:bg-[#f46f25] hover:border-[#f46f25] font-[Adventure]">
            Adventure
          </button>
        </div> */}
        <p className="text-6xl font-[Adventure] bg-gradient-to-b from-yellow-300 to-orange-600 text-transparent bg-clip-text">
          Coming Out In
        </p>
        <Countdown />
      </div>
    </div>
  );
}

export default MoviePosterTime;
