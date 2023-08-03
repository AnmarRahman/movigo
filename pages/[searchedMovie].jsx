import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import SearchedMovieList from "../components/SearchedMovieList";

function searchList({ movies }) {
  return (
    <div className="bg-[#242424] overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Header href="/" buttonText="Home" />
      <SearchedMovieList movieArray={movies} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { searchedMovie } = context.query;

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=166b5d91c302695e47098755a46149d8&language=en-US&query=${searchedMovie}&page=1`
    );
    const movies = data.results;
    return {
      props: {
        movies,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movies: [],
      },
    };
  }
}

export default searchList;
