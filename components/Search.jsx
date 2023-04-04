import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Search() {
  const router = useRouter();
  const [titleSearched, setTitleSearched] = useState();

  function handleMovieSearchInputChange(event) {
    setTitleSearched(event.target.value);
  }

  function searchMovie() {
    router.push(`/${titleSearched}`);
  }

  useEffect(() => {
    console.log(titleSearched);
  }, [titleSearched]);

  return (
    <>
      <section className="text-gray-600">
        <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <div class="flex w-full justify-center items-end">
            <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label for="hero-field" class="leading-7 text-sm text-gray-600">
                Movie Title
              </label>
              <input
                type="text"
                id="movie-search"
                name="hero-field"
                class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleMovieSearchInputChange}
              />
            </div>
            <button
              class="inline-flex text-black font-bold bg-[#EF3E38] border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg"
              onClick={searchMovie}
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
