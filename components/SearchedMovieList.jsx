import { useState } from "react";
import { useRouter } from "next/router";
import CollapsibleText from "./CollapsibleText";

function SearchedMovieList({ movieArray, loading }) {
  const router = useRouter();
  const { searchedMovie } = router.query;
  const [sortOption, setSortOption] = useState("DEFAULT");

  function movieClicked(id) {
    router.push(`/${searchedMovie}/${id}`);
  }

  function handleSortChange(event) {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  }

  function sortMovies(array) {
    switch (sortOption) {
      case "OLD_TO_NEW":
        return array.sort((a, b) =>
          a.release_date.localeCompare(b.release_date)
        );
      case "NEW_TO_OLD":
        return array.sort((a, b) =>
          b.release_date.localeCompare(a.release_date)
        );
      case "ALPHABETICAL":
        return array.sort((a, b) =>
          a.original_title.localeCompare(b.original_title)
        );
      default:
        return array;
    }
  }

  const sortedMovies = sortMovies(movieArray);

  return (
    <>
      <section className="text-gray-600 relative bg-[#242424]">
        <div className="container px-5 py-12 mx-auto">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            onChange={handleSortChange}
            value={sortOption}
          >
            <option value="DEFAULT" disabled>
              Sort
            </option>
            <option value="OLD_TO_NEW">Release date, Oldest to Newest</option>
            <option value="NEW_TO_OLD">Release date, Newest to Oldest</option>
            <option value="ALPHABETICAL">Alphabetical Order</option>
          </select>

          <div id="movie-list" className="flex flex-wrap">
            {loading
              ? new Array(4).fill(0).map((_, index) => (
                  <div
                    className="px-8 py-2 mb-4 border-l-2 border-[#EF3E38] border-opacity-60 flex items-center space-x-12 w-full"
                    key={index}
                  >
                    <div className="flex items-center justify-center !h-[200px] bg-gray-400 rounded !w-[300px] ">
                      <svg
                        className="w-12 h-12 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="h-6 bg-gray-400 rounded-md w-28 mb-2" />
                      <div className="h-4 bg-gray-400 rounded-md w-28 mb-4 " />
                      <div className="h-28 bg-gray-400 rounded-md w-48" />
                    </div>
                  </div>
                ))
              : sortedMovies
                  .filter((movie) => movie.backdrop_path)
                  .filter((movie) => movie.original_language === "en")
                  .map((movie) => (
                    <div
                      className="w-full px-8 py-8 mb-4 border-2 rounded-2xl shadow-2xl hover:scale-[1.005] transition duration-300 border-black border-opacity-60 flex items-center space-x-12 bg-black/50 text-white"
                      key={movie.id}
                    >
                      <img
                        className="rounded-xl md:w-[300px] w-[275px]"
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        alt={movie.original_title}
                        onClick={() => movieClicked(movie.id)}
                      />
                      <div className="">
                        <h2 className="text-lg md:text-xl font-semibold title-font">
                          {movie.original_title}
                        </h2>
                        <p className="leading-relaxed text-base md:text-lg mb-4 text-gray-600">
                          {`Release date: ${movie.release_date}`}
                        </p>
                        <div className="leading-relaxed text-base md:text-lg mb-4 font-semibold">
                          {
                            <CollapsibleText
                              text={movie.overview}
                              collapsedHeight="140"
                            />
                          }
                        </div>
                      </div>
                    </div>
                  ))}
            {console.log(movieArray)}
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchedMovieList;
