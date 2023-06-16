import axios from "axios";
import React, { useEffect, useState } from "react";

function Hero({ visible }) {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    fetchMovies().then((moviesData) => {
      setMovies(moviesData.slice(0, 10));
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

  return (
    <>
      <div
        className={`container mx-auto flex justify-center items-center ${visible}`}
      >
        <div className="flex items-center justify-center">
          <div
            className="cursor-pointer text-3xl pr-6"
            onClick={handlePreviousMovie}
          >
            &lt;
          </div>
          <div className=" px-8 py-8 mb-4 border-2  shadow-2xl border-black flex items-center space-x-12 ">
            {console.log(movies)}

            {/* <img
              className="absolute scale-150"
              src={`https://image.tmdb.org/t/p/w500${movies[currentMovieIndex].backdrop_path}`}
              alt=""
            /> */}
            <img
              src={`https://image.tmdb.org/t/p/w300${movies[currentMovieIndex].backdrop_path}`}
              alt=""
            />
            <div class="">
              <h2 class="text-lg sm:text-xl text-black font-semibold title-font">
                {movies[currentMovieIndex].original_title}
              </h2>
              <p class="leading-relaxed text-md mb-4 text-gray-600">
                {`Release date : ${movies[currentMovieIndex].release_date}`}
              </p>
              <p class="leading-relaxed text-md mb-4 text-black font-semibold">
                {movies[currentMovieIndex].overview}
              </p>
            </div>
          </div>

          <div
            className="cursor-pointer text-3xl pl-6"
            onClick={handleNextMovie}
          >
            &gt;
          </div>
        </div>
      </div>
    </>
  );
}
// I have a hero array in javascript that contains a movies array. I want to show the first movie object and also add arrows the the sides of the object. A left arrow on the left and a right arrow on the right. When i click on the right arrow, the current movie object fades away and the next movie object fades in. When i click on the left arrow, same thing happens but the previous movie object takes place.

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
