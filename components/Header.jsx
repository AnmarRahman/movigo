import React, { useEffect, useState } from "react";
import SearchButton from "./SearchButton";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

function Header({ visible }) {
  const router = useRouter();
  const [isHalfHidden, setIsHalfHidden] = useState(false);

  const handleClick = () => {
    router.push("/");
  };

  const handleScroll = () => {
    setIsHalfHidden(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseOver = () => {
    if (window.scrollY !== 0) {
      setIsHalfHidden(false);
    }
  };

  const handleMouseLeave = () => {
    if (window.scrollY !== 0) {
      setIsHalfHidden(true);
    }
  };

  return (
    <>
      <div
        className={` md:h-[100px] h-[75px] top-0 left-0 right-0 z-50 text-gray-300 bg-gray-600 mx-auto flex sm:px-20 px-10 py-0 flex-row items-center justify-between space-x-6 ${
          isHalfHidden
            ? "md:top-[-50px] top-[-50px] transition-top duration-300 ease-in-out"
            : ""
        } 
          
         transition-top duration-300 ease-in-out`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="/"
          onClick={handleClick}
          className="flex title-font font-medium items-center text-gray-900 "
        >
          <div className="flex flex-col justify-center items-center md:scale-100 scale-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3em"
              viewBox="0 0 576 512"
              fill="#6366F1"
            >
              <path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z" />
            </svg>

            <span className="text-lg text-gray-300">MOVIGO</span>
          </div>
        </Link>
        <nav className=" hidden md:flex flex-wrap items-center text-base text-center justify-center cursor-pointer">
          <ScrollLink
            to="nowPlaying"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-gray-400"
          >
            Now Playing
          </ScrollLink>
          <ScrollLink
            to="upcoming"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-gray-400"
          >
            Upcoming
          </ScrollLink>
          <ScrollLink
            to="topRated"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-gray-400"
          >
            Top Rated
          </ScrollLink>
          <ScrollLink
            to="blogs"
            smooth={true}
            duration={500}
            className="mr-5 hover:text-gray-400"
          >
            Blogs
          </ScrollLink>
        </nav>

        <SearchButton />
      </div>
    </>
  );
}

export default Header;
