import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Blog({ title, paragraph, img }) {
  return (
    <>
      <div className=" relative flex justify-center items-center hover:scale-[1.01] transition duration-300">
        <img
          className="rounded-3xl 2xl:w-[450px] xl:w-[400px] lg:w-[300px] md:w-[220px] sm:w-[200px]"
          src={img}
          alt=""
        />
        <span className="rounded-3xl absolute bottom-0 left-0 text-transparent text-xl bg-gradient-to-t from-black to-transparent h-full ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          voluptate nam aliquid. Quia deserunt, iusto suscipit laboriosam, eos
          architecto asperiores hic corporis corrupti sit obcaecati iure
          dolorem, quod dicta molestias.
        </span>
        <div className="absolute flex flex-col items-center justify-center space-y-20 md:space-y-10 lg:space-y-24 xl:space-y-64">
          <span className="w-3/4 text-center bg-black/25 rounded-2xl text-white text-xs md:text-sm lg:text-lg xl:text-xl font-extrabold">
            {title}
          </span>
          <div className="flex flex-col items-center justify-center">
            <span className=" text-white text-xs md:text-sm lg:text-lg xl:text-xl font-extrabold">
              By : Anmar Rahman
            </span>
            <span className="w-3/4 text-white text-xs md:text-sm lg:text-base xl:text-lg">
              {paragraph}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
