import axios from "axios";
import Header from "../../components/Header";
import MovieInfo from "../../components/MovieInfo";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

function moviePage({ movie }) {
  return (
    <div className="">
      <Header href="/" buttonText="Home" />
      <MovieInfo movie={movie} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { movieId } = context.query;

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=166b5d91c302695e47098755a46149d8&language=en-US`
    );
    const movie = data;
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movie: null,
      },
    };
  }
}

export default moviePage;
