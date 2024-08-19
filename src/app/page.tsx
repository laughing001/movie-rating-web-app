
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { fetchMovies } from '../utils/fetchMovies';

export default async function HomePage() {
  const movies = await fetchMovies(1);

  return (
    <>
      <SearchBar />
      <MovieList movies={movies} />
    </>
  );
}
