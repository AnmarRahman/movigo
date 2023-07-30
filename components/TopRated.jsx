import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroMovie from "./HeroMovie";
import MoviesList from "./MoviesList";
import TopRatedMoviesList from "./TopRatedMovieList";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then((moviesData) => {
      setMovies(
        moviesData
          .filter((movie) => movie.original_language === "en")
          .slice(0, 8)
      );
    });
  }, []);

  // This useEffect is used to filter the movie array to only movies with a release date after today's date. The TMDB api doesn't exactly give lots of movies back for the upcoming movies and most of them are before today's date, therefore I just included the ones provided regardless of the release date.

  // useEffect(() => {
  //   fetchMovies().then((moviesData) => {
  //     const filteredMovies = moviesData
  //       .filter((movie) => {
  //         const movieReleaseDate = new Date(movie.release_date);
  //         const today = new Date();
  //         console.log(today);
  //         return movieReleaseDate > today; // Filter movies with release dates after today
  //       })
  //       .filter((movie) => movie.original_language === "en");
  //     setMovies(filteredMovies);
  //   });
  // }, []);

  if (movies.length === 0) {
    return null; // Render nothing if movies array is empty
  }

  return (
    <>
      <div className={`relative mx-auto bg-[#242424]`}>
        <div className="container px-5 py-12 mx-auto">
          <p className="lg:text-6xl text-5xl font-extrabold text-white pb-12 text-center">
            TOP RATED
          </p>
          <TopRatedMoviesList movieArray={movies} />
        </div>
      </div>
    </>
  );
}

const fetchMovies = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
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

export default TopRated;
