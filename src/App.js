import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./MovieSearch/MovieSearch";
import { MovieProvider } from "./context/MovieProvider";

function App() {
  const [movie, setMovie] = useState([]);
  const [movie2, setMovie2] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          // Authorization:
          //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTVlZDZkODU0Mzc1MzM0NzdiZjQzNGIzZGFkN2Q2OSIsIm5iZiI6MTcyOTY1MTUyOS4xOTMyMywic3ViIjoiNjcxODYwZDY0MjdjNWMxOWYwMjU4YjE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1EU9IU7e4lBnvBpAR1QYNmnbpqqAj9uN08w_RITLuuE",
        },
      };

      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

      const response = await fetch(url, options);
      const data = await response.json();
      setMovie(data.results);
    };
    fetchMovie();
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          // Authorization:
          //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTVlZDZkODU0Mzc1MzM0NzdiZjQzNGIzZGFkN2Q2OSIsIm5iZiI6MTcyOTY1MTUyOS4xOTMyMywic3ViIjoiNjcxODYwZDY0MjdjNWMxOWYwMjU4YjE4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1EU9IU7e4lBnvBpAR1QYNmnbpqqAj9uN08w_RITLuuE",
        },
      };

      const url =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

      const response = await fetch(url, options);
      const data = await response.json();
      setMovie2(data.results);
    };
    fetchMovie();
  }, []);

  return (
    <MovieProvider>
      <div className=" bg-black pd-10">
        <Header handleSearch={handleSearch} movieSearch={movieSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch
            title3={"Search Results"}
            movieSearch={movieSearch}
            // handleTrailer={handleTrailer}
          />
        ) : (
          <MovieList
            title1={"Popular"}
            title2={"Top Rated"}
            movie={movie}
            movie2={movie2}
          />
        )}
      </div>
    </MovieProvider>
  );
}

export default App;
