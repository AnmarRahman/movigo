import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

function Blogs() {
  return (
    <>
      <div className={`relative mx-auto bg-[#242424]`}>
        <div className="container py-12 mx-auto">
          <p className="text-6xl font-extrabold text-white pb-12">BLOGS</p>
          <div className="flex flex-row items-center justify-between">
            <Blog
              title={
                "THE RISE OF AI: EXPLORING THE FUTURISTIC WORLD OF SCI-FI MOVIES"
              }
              paragraph={
                "Dive into the captivating realm of sci-fi movies, where AI takes center stage, unveiling a future filled with wonder and uncertainty."
              }
              img={"https://i.postimg.cc/TY6WTbZS/scifi.jpg"}
            />
            <Blog
              title={"MOVIES COMING OUT THIS WEEK"}
              paragraph={
                "This week, cinephiles can look forward to a thrilling lineup of upcoming movies, promising unforgettable stories and mesmerizing performances."
              }
              img={
                "https://i.postimg.cc/4xZqYRkz/happy-child-wearing-3d-glasses-surprised-kid-against-yellow-wall-cinema-movie-time-concept-411285-10.jpg"
              }
            />
            <Blog
              title={
                "Horror Movies: Reaching New Heights of Fear - A Modern Renaissance in the Genre"
              }
              paragraph={
                "In the world of horror, the shadows have deepened, and screams echo louder, making movies scarier than ever."
              }
              img={
                "https://i.postimg.cc/bv4KNDzv/desktop-wallpaper-vintage-horror-comic-thumbnail.jpg"
              }
            />
          </div>
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

export default Blogs;
