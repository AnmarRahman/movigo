import React from "react";
import HeaderDate from "./HeaderDate";
import HeaderTitleTop from "./HeaderTitleTop";
import HeaderTitleMiddle from "./HeaderTitleMiddle";
import SearchButton from "./SearchButton";
import { useRouter } from "next/router";
import Link from "next/link";

function HeroSlideshow({ visible }) {
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <div id="prev" className="arrow">
          &lt;
        </div>
        <div id="next" className="arrow">
          &gt;
        </div>
        <div id="image-container">
          <img id="current-image" src="image1.jpg" alt="Slideshow Image" />
        </div>
      </div>
    </>
  );
}

export default HeroSlideshow;
