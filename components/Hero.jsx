import Image from "next/image";
import heroImg from "../resources//clinteastwood.png";
import axios from "axios";
import React, { useEffect, useState } from "react";

// resources\5484546-good-bad-and-ugly-wallpapers.jpg
import { useRouter } from "next/router";
import MoviesList from "./MoviesList";

function Hero({ visible }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then((moviesData) => {
      setMovies(moviesData);
    });
  }, []);

  return (
    <>
      <div
        className={`container mx-auto flex flex-col px-0 justify-center items-center pb-10 ${visible}`}
      >
        <div className="flex gap-x-8">
          {console.log(movies.slice(0, 10))}
          <MoviesList movieArray={movies.slice(0, 10)} />
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
