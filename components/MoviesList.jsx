import { useRouter } from "next/router";

function MoviesList({ movieArray, loading }) {
  const router = useRouter();
  const { searchedMovie } = router.query;

  function movieClicked(id) {
    router.push(`/${searchedMovie}/${id}`);
  }

  return (
    <>
      <section className="text-gray-600 relative">
        <div className="container px-5 py-24 mx-auto">
          <select
            className="mb-4 bg-gray-50 border-2 border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            id="filter"
          >
            <option value="disabled selected">Sort</option>
            <option value="OLD_TO_NEW">Release date, Oldest to Newest</option>
            <option value="NEW_TO_OLD">Release date, Newest to Oldest</option>
          </select>
          <div id="movie-list" className="flex flex-wrap">
            {loading
              ? new Array(4).fill(0).map((_, index) => (
                  <div className=" px-8 py-2 mb-4 border-l-2 border-[#EF3E38] border-opacity-60 flex items-center space-x-12 w-full">
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
                    <div className="flex flex-col ">
                      <div className="h-6 bg-gray-400 rounded-md  w-28 mb-2" />
                      <div className="h-4 bg-gray-400 rounded-md w-28 mb-4 " />
                      <div className="h-28 bg-gray-400 rounded-md w-48" />
                    </div>
                  </div>
                ))
              : movieArray
                  .filter((movie) => movie.backdrop_path)
                  .filter((movie) => movie.original_language === "en")
                  .map((movie) => (
                    <div
                      className="w-full px-8 py-8 mb-4 border-2 rounded-2xl shadow-2xl hover:scale-[1.005] transition duration-300 border-black border-opacity-60 flex items-center space-x-12"
                      key={movie.id}
                      onClick={() => movieClicked(movie.id)}
                    >
                      <img
                        className=""
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                      />
                      <div className="">
                        <h2 className="text-lg sm:text-xl text-black font-semibold title-font">
                          {movie.original_title}
                        </h2>
                        <p className="leading-relaxed text-md mb-4 text-gray-600">
                          {`Release date : ${movie.release_date}`}
                        </p>
                        <p className="leading-relaxed text-md mb-4 text-black font-semibold">
                          {movie.overview}
                        </p>
                      </div>
                    </div>
                  ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MoviesList;
