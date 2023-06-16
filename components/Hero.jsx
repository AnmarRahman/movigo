import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Hero({ visible }) {
  const router = useRouter();
  const { searchedMovie } = router.query;
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  function movieClicked(id) {
    router.push(`/${searchedMovie}/${id}`);
  }

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

  if (movies.length === 0) {
    return null; // Render nothing if movies array is empty
  }

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
          <div
            className=" px-8 py-8 mb-4 border-2  shadow-2xl border-black flex items-center space-x-12 "
            onClick={() => movieClicked(movies[currentMovieIndex].id)}
          >
            {console.log(movies)}

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
