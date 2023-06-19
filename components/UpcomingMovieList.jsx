import { useRouter } from "next/router";

function ComingSoonMoviesList({ movieArray, loading }) {
  const router = useRouter();
  const { searchedMovie } = router.query;

  function movieClicked(id) {
    router.push(`/${searchedMovie}/${id}`);
  }

  return (
    <>
      <section className="text-gray-600 relative">
        <div
          id="movie-list"
          className="flex flex-wrap flex-row justify-between"
        >
          {loading
            ? new Array(4).fill(0).map((_, index) => (
                <div
                  className="px-8 py-2 mb-4 border-l-2 border-[#EF3E38] border-opacity-60 flex items-center space-x-12 w-full"
                  key={index}
                >
                  {/* Placeholder content */}
                </div>
              ))
            : movieArray
                .filter((movie) => movie.backdrop_path)
                .filter((movie) => movie.original_language === "en")
                .map((movie) => {
                  const releaseDate = new Date(movie.release_date);
                  const formattedReleaseDate = releaseDate.toLocaleDateString(
                    "en-US",
                    { month: "short", day: "2-digit", year: "numeric" }
                  );

                  return (
                    <div
                      className="rounded-2xl hover:scale-[1.005] transition duration-300 flex flex-col items-center"
                      key={movie.id}
                      onClick={() => movieClicked(movie.id)}
                    >
                      <img
                        className="rounded-xl mb-8"
                        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                        alt={movie.original_title}
                      />
                      <div className="">
                        <h2 className="text-lg w-[300px] sm:text-2xl text-white font-semibold title-font">
                          {movie.original_title}
                        </h2>
                        <p className="leading-relaxed text-2xl pb-8 text-gray-600">
                          {formattedReleaseDate}
                        </p>
                      </div>
                    </div>
                  );
                })}
        </div>
      </section>
    </>
  );
}

export default ComingSoonMoviesList;
