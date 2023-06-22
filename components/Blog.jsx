import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Blog({ title, paragraph, img }) {
  return (
    <>
      <div className=" relative flex justify-center items-center hover:scale-[1.01] transition duration-300">
        <img className="rounded-3xl" src={img} alt="" />
        <span className="rounded-3xl absolute bottom-0 left-0 text-transparent text-xl bg-gradient-to-t from-black to-transparent h-full ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          voluptate nam aliquid. Quia deserunt, iusto suscipit laboriosam, eos
          architecto asperiores hic corporis corrupti sit obcaecati iure
          dolorem, quod dicta molestias.
        </span>
        <span className="absolute w-3/4 bottom-1/3  text-white text-xl font-extrabold ">
          {title}
        </span>
        <span className="absolute bottom-36  text-white text-xl font-extrabold ">
          By : Anmar Rahman
        </span>
        <span className="absolute w-3/4 bottom-4  text-white text-lg  ">
          {paragraph}
        </span>
      </div>
    </>
  );
}

export default Blog;
