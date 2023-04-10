import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Search from "../components/Search";
import axios from "axios";

function searchList({ movies }) {
  return (
    <div className="bg-[wheat] flex items-center justify-center py-4">
      <div className="w-[45vw] bg-[#E2CCB1] border-t-2 border-b-2 border-l-2 border-r-[1px]  border-black">
        <Header href="/" buttonText="Home" />
        <Search />
        <MoviesList movieArray={movies} />
      </div>
      <div className="w-[45vw] bg-[#E2CCB1] border-t-2 border-b-2 border-l-[1px] border-r-2 border-black">
        <Header href="/" buttonText="Home" />
        <Search />
        <MoviesList movieArray={movies} />
      </div>
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
