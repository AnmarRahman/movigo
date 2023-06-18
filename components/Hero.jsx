import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroMovie from "./HeroMovie";

function Hero({ visible }) {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetchMovies().then((moviesData) => {
      setMovies(moviesData.slice(0, 10));
      console.log(movies);
    });
  }, []);

  const handleNextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const handlePreviousMovie = () => {
    setCurrentMovieIndex(
      (prevIndex) => (prevIndex - 1 + movies.length) % movies.length
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (movies.length === 0) {
    return null; // Render nothing if movies array is empty
  }

  return (
    <>
      <div
        className={`relative mx-auto flex justify-center items-center h-[70vh] ${visible}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full flex items-center justify-center overflow-hidden">
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl text-white z-10 px-20 py-2 transition-opacity duration-300 focus:outline-none ${
              (currentMovieIndex === 0 || !isHovered) && "invisible"
            }`}
            onClick={() => {
              console.log(currentMovieIndex);
              if (currentMovieIndex !== 0) {
                handlePreviousMovie();
              }
            }}
          >
            &lt;
          </button>
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl text-white z-10 px-20 py-2 transition-opacity duration-300 focus:outline-none ${
              (currentMovieIndex === 9 || !isHovered) && "invisible"
            }`}
            onClick={() => {
              console.log(currentMovieIndex);
              if (currentMovieIndex !== 9) {
                handleNextMovie();
              }
            }}
          >
            &gt;
          </button>

          {movies.map((movie, index) => (
            <div
              key={index}
              className={`${
                index === currentMovieIndex
                  ? "translate-x-0"
                  : "translate-x-full"
              } transition-transform duration-1000 absolute top-0 left-0 w-full h-full flex justify-center items-center`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                transform: `translateX(${(index - currentMovieIndex) * 100}%)`,
              }}
            >
              <HeroMovie movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const fetchMovies = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/week",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjZiNWQ5MWMzMDI2OTVlNDcwOTg3NTVhNDYxNDlkOCIsInN1YiI6IjYzZGM2ZGY5Y2U1ZDgyMDA3Y2EzMzdiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EWGXFQbLBzA5xP0wso9zfWpQ3Hp2Y_VfhN9ogEUCwRw",
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
      return []; // Return an empty array in case of error
    });
};

export default Hero;
