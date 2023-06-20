import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero.jsx";
import Upcoming from "../components/Upcoming";
import TopRated from "../components/TopRated";
import Blogs from "../components/Blogs";

export default function Test() {
  const [visible, setVisible] = useState("visible");

  return (
    <div
      className={` overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 `}
    >
      <Header visible={visible} href="searchList" buttonText="Movies List" />
      <Hero visible={visible} />
      <Upcoming />
      {/* <Hero visible={visible} /> */}
      <img
        className="bg-cover"
        src="https://www.lucasfilm.com/app/uploads/Indiana-Jones-and-the-Dial-of-Destiny-Marquee-B.jpg"
        alt=""
      />
      <TopRated />
      <Blogs />
      <TopRated />
    </div>
  );
}
