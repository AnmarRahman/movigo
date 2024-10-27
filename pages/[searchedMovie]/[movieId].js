import axios from "axios";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MovieInfo from "../../components/MovieInfo";

function moviePage({ movie }) {
  return (
    <div className="bg-[#242424] overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Header href="/" buttonText="Home" />
      <MovieInfo movie={movie} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { movieId } = context.query;
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
    );
    const movie = data;
    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        movie: null,
      },
    };
  }
}

export default moviePage;
