import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero.jsx";
import Upcoming from "../components/Upcoming";
import TopRated from "../components/TopRated";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import MoviePosterTime from "../components/MoviePosterTime";

export default function Test() {
  const [visible, setVisible] = useState("visible");

  return (
    <div
      className={` overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 `}
    >
      <Header visible={visible} href="searchList" buttonText="Movies List" />
      <Hero visible={visible} />
      <Upcoming />
      <MoviePosterTime />
      <TopRated />
      <Blogs />
      <Footer />
    </div>
  );
}
