import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import axios from "axios";

function searchList({ movies }) {
  return (
    <div className="bg-[#E2CCB1]">
      <Header href="/" buttonText="Home" />
      <Search />
      <MoviesList movieArray={movies} />
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
