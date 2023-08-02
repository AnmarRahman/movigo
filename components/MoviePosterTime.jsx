import React from "react";
import Countdown from "./Countdown";

function MoviePosterTime() {
  return (
    <div className="bg-[url('https://i.postimg.cc/XYJN4PMF/indianajonesdarkwallpaper.jpg')] bg-cover flex justify-between items-center h-[250px] sm:h-[300px] md:h-[500px] lg:h-[700px]">
      <div className="w-1/2 text-center space-y-4">
        <p className="text-3xl sm:text-5xl md:text-8xl lg:text-9xl font-[Adventure] bg-gradient-to-b from-yellow-300 to-orange-600 text-transparent bg-clip-text">
          Indiana jones V
        </p>
        <p className="text-lg sm:text-2xl md:text-5xl lg:text-6xl font-[Adventure] bg-gradient-to-b from-yellow-300 to-orange-600 text-transparent bg-clip-text">
          Coming Out In
        </p>
        <Countdown />
      </div>
    </div>
  );
}

export default MoviePosterTime;
