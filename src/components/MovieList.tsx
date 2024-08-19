"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../utils/fetchMovies";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { setMovies, setPageNo } from "../store/movieSlice";
import NoDataDisplay from "./NoDataDisplay";
import { Movie, MovieState } from "../types";

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies: initialMovies }: MovieListProps) {
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: { movies: MovieState }) => state.movies.movies
  );
  const pageNo = useSelector(
    (state: { movies: MovieState }) => state.movies.pageNo
  );
  const key = useSelector((state: { movies: MovieState }) => state.movies.key);
  if (key) {
    initialMovies = initialMovies.filter((movie) =>
      movie.title.toLowerCase().includes(key.trim().toLowerCase())
    );
  }
  if (pageNo === 2 && movies.length === 0 && initialMovies.length > 0) {
    dispatch(setMovies(initialMovies));
  }
  useEffect(() => {
    const loadMoreMovies = async () => {
      const newMovies: any = await fetchMovies(pageNo + 1, 20, key);
      dispatch(setMovies(newMovies));
    };

    const handleScroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        dispatch(setPageNo(pageNo + 1));
        loadMoreMovies();
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [movies.length, initialMovies, pageNo, dispatch, key]);
  if (0 === movies.length && key) {
    return <NoDataDisplay />;
  }
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
      minChildWidth="240px"
      ml={4}
      mr={4}
      spacing={4}
      mb={8}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
}
