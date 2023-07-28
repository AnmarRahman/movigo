import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CollapsibleText from "../components/CollapsibleText";

function HeroMovie({ movie }) {
  const router = useRouter();
  const { searchedMovie } = router.query;

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Function to check and update screen size
    const handleScreenResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    // Add event listener for screen resize
    window.addEventListener("resize", handleScreenResize);

    // Call handleScreenResize once when the component mounts
    handleScreenResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  function movieClicked(id) {
    router.push(`/${searchedMovie}/${id}`);
  }

  // Format the release date
  const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <div className="flex items-center justify-center flex-col w-[95vw] py-10 space-y-10 lg:space-y-14">
        <h2 className="text-4xl lg:text-6xl text-white font-semibold text-center">
          {movie.original_title.toUpperCase()}
        </h2>
        <div className="px-8 w-[90vw] flex lg:flex-row flex-col items-center justify-center lg:space-x-32 lg:space-y-0 space-y-10 lg:text-left text-center">
          <img
            className="rounded-xl w-[400px] lg:w-[500px]"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
          <div className="lg:w-1/3 space-y-3">
            <p className=" leading-snug text-base lg:text-xl text-white font-semibold text-clip ">
              {isLargeScreen ? (
                <CollapsibleText text={movie.overview} />
              ) : (
                movie.overview
              )}
            </p>
            <p className="leading-relaxed text-base lg:text-xl  text-white font-semibold">
              {releaseDate}
            </p>
            <button
              className="relative inline-flex w-2/3 lg:w-full items-center justify-center p-0.5  overflow-hidden text-sm lg:text-xl text-black font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              onClick={() => movieClicked(movie.id)}
            >
              <span className="relative w-full px-2 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                WATCH TRAILER
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroMovie;
