import React from "react";
import SearchButton from "./SearchButton";
import { useRouter } from "next/router";
import Link from "next/link";

function Header({ visible }) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <header className="text-gray-300 body-font bg-gray-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            onClick={handleClick}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-gray-300">MOVIGO</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
            <a className="mr-5 hover:text-gray-400">Now Playing</a>
            <a className="mr-5 hover:text-gray-400">Upcoming</a>
            <a className="mr-5 hover:text-gray-400">Top Rated</a>
            <a className="mr-5 hover:text-gray-400">Blogs</a>
          </nav>
          <SearchButton />
        </div>
      </header>
    </>
  );
}

export default Header;
