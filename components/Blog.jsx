import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Blog({ title, paragraph, img }) {
  return (
    <>
      <div className=" relative flex justify-center hover:scale-[1.01] transition duration-300">
        <img
          className="rounded-3xl 2xl:w-[450px] xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[200px] w-[150px] "
          src={img}
          alt=""
        />
        <div className="absolute rounded-3xl flex flex-col items-center sm:justify-between justify-center h-full py-6 bg-gradient-to-t from-black to-transparent">
          <span className="w-3/4 text-center bg-black/25 rounded-2xl text-white text-xs md:text-sm lg:text-lg xl:text-xl font-extrabold p-1 ">
            {title}
          </span>
          <div className="w-3/4">
            <span className=" text-white sm:block hidden text-xs md:text-sm lg:text-lg xl:text-xl font-extrabold self-center ">
              By : Anmar Rahman
            </span>
            <span className=" sm:block hidden text-white text-xs md:text-sm lg:text-base xl:text-lg">
              {paragraph}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
