import Image from "next/image";
import heroImg from "../resources//HD-wallpaper-2021-avatar-2-films-poster.jpg";
import { useState } from "react";
import { useRouter } from "next/router";
import HeroTitle from "./HeroTitle";

function Hero({ flipAnimation, visible }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  function movieSearched() {
    if (searchQuery.trim() !== "") {
      flipAnimation();
      setTimeout(() => {
        router.push(`/${searchQuery}`);
      }, 1000);
    }
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <>
      <>
        <div
          className={`container mx-auto flex flex-col px-5 py-2 justify-center items-center ${visible}`}
        >
          <HeroTitle />
          {/* <Image
            src={heroImg}
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt=""
          /> */}
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-white">
              Welcome to Movigo
            </h1>
            <p className="mb-8 leading-relaxed text-2xl text-white">
              Not sure about your friends choice for movie night? Her pick for
              Netflix n Chill? No worries, you've come to the right place.
              Search for the movie and say no more!
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Movie Title
                </label>
                <input
                  type="text"
                  id="searchQuery"
                  value={searchQuery}
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleSearchInputChange}
                />
              </div>
              <button
                className="inline-flex text-black font-bold bg-[#EF3E38] border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg"
                onClick={movieSearched}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Hero;
