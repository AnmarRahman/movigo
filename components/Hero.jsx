import Image from "next/image";
import heroImg from "../resources//clinteastwood.png";
// resources\5484546-good-bad-and-ugly-wallpapers.jpg
import { useState } from "react";
import { useRouter } from "next/router";
import HeroTitle from "./HeroTitle";

function Hero({ visible }) {
  return (
    <>
      <>
        <div
          className={`container mx-auto flex flex-col px-5 justify-center items-center pb-10 ${visible}`}
        >
          <HeroTitle />

          <div className="flex gap-x-8">
            <div className="w-1/2 h-full pt-6 flex items-center justify-center text-left">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl mb-4 tracking-wider font-['Lato'] font-[900] text-[#88714F] ">
                  STEP BACK IN TIME WITH MOVIGO, YOUR RETRO-STYLED MOVIE
                  DATABASE WEBSITE
                </h1>
                <Image
                  src={heroImg}
                  className="grayscale-[70%] border-4 mb-2 border-[#4E3C16]"
                  alt=""
                />
                <p className="text-left text-[14px] font-['Lato'] text-[#4B3A1C] mb-4">
                  Thrilling Western "The Good, the Bad and the Ugly" starring
                  Clint Eastwood, Lee Van Cleef, and Eli Wallach in a
                  pulse-pounding showdown. Don't miss this iconic classic!
                </p>
                <div className="flex gap-x-4">
                  <p className=" text-[14px] font-['Lato'] text-[#4B3A1C] w-1/2 ">
                    The Good, the Bad and the Ugly is a thrilling spaghetti
                    Western directed by the masterful Sergio Leone and released
                    in 1966. Set during the American Civil War, the film follows
                    three gunfighters in search of a buried cache of Confederate
                    gold, each with their own motives and methods, in a
                    dangerous game of cat-and-mouse. With a star-studded cast
                    including Clint Eastwood as the stoic Blondie, Lee Van Cleef
                    as the ruthless Angel Eyes, and Eli Wallach as the comically
                    greedy Tuco, the movie is an epic masterpiece of action and
                    suspense.
                  </p>
                  <p className=" text-[14px] font-['Lato'] text-[#4B3A1C] w-1/2">
                    The film's iconic music score, composed by Ennio Morricone,
                    perfectly captures the mood of the Old West, and its
                    cinematography is breathtaking. Leone's use of close-ups and
                    extreme long shots creates an unforgettable atmosphere,
                    bringing the desolate landscape to life. As the three
                    gunslingers make their way towards the ultimate showdown,
                    tensions rise and alliances shift, leading to a thrilling
                    climax. With morally ambiguous characters and intense action
                    sequences, The Good, the Bad and the Ugly is a must-see for
                    Western fans.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-full flex pt-6 items-center justify-center text-center">
              <div className="">
                <div className="border-2 border-[#4E3C16] p-2 border-dotted">
                  <h1 className=" text-md text-white bg-[#88714F] p-4 font-['Lato'] ">
                    Fresh from the Studios: Discover the Latest Blockbusters and
                    Hidden Gems with Movigo's New Releases Section!
                  </h1>
                </div>
                <p className="mb-8 leading-relaxed text-2xl text-white">
                  Not sure about your friends choice for movie night? Her pick
                  for Netflix n Chill? No worries, you've come to the right
                  place. Search for the movie and say no more!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Hero;
