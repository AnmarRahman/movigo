import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import CollapsibleText from "./CollapsibleText";

function MovieInfo({ movie }) {
  const router = useRouter();
  const { movieId, searchedMovie } = router.query;
  const [trailerId, setTrailerId] = useState(null);

  async function getTrailerId() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=166b5d91c302695e47098755a46149d8`
    );
    const videos = response.data.results;
    const trailer = videos.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    const trailerVideoId = trailer?.key;
    return trailerVideoId;
  }

  useEffect(() => {
    async function fetchData() {
      const id = await getTrailerId(movieId);
      setTrailerId(id);
    }
    fetchData();
  }, []);

  const options = {
    height: "auto",
    width: "auto",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="container px-5 py-12 mx-auto w-screen">
      <BsArrowLeft
        className={`text-4xl ml-2 cursor-pointer hover:scale-[1.1] transition duration-300 mb-4 ${
          searchedMovie === "undefined" && "hidden"
        }`}
        onClick={() => router.push(`/${searchedMovie}`)}
      />
      <div
        className="w-scree px-8 py-8 border-2 rounded-2xl shadow-2xl border-black border-opacity-60 flex xl:flex-row flex-col justify-center items-center xl:space-x-12 xl:space-y-0 space-y-10 bg-black/50"
        key={movie.id}
      >
        <div className="space-y-4">
          <img
            className="mx-auto xl:mx-0"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
          <div className="">
            <h2 className="text-center xl:text-left text-lg sm:text-xl text-white font-semibold title-font">
              {movie.original_title}
            </h2>
            <p className="text-center xl:text-left leading-relaxed text-md text-gray-600">
              {`Release date : ${movie.release_date}`}
            </p>
          </div>
          <div className="text-center xl:text-left leading-relaxed text-md text-white font-semibold">
            {<CollapsibleText text={movie.overview} />}
          </div>
        </div>
        <YouTube videoId={trailerId} opts={options} />
      </div>
    </div>
  );
}

export default MovieInfo;
