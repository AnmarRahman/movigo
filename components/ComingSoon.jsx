import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroMovie from "./HeroMovie";
import MoviesList from "./MoviesList";
import ComingSoonMoviesList from "./ComingSoonMovieList";

function ComingSoon() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetchMovies().then((moviesData) => {
      setMovies(moviesData.slice(0, 10));
      console.log(movies);
    });
  }, []);

  if (movies.length === 0) {
    return null; // Render nothing if movies array is empty
  }

  return (
    <>
      <div
        className={`relative mx-auto flex justify-center items-center bg-gray-800`}
      >
        <ComingSoonMoviesList movieArray={movies} />
      </div>
    </>
  );
}

const fetchMovies = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming",
    params: { language: "", page: "1" },
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

export default ComingSoon;
