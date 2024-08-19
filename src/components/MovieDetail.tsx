"use client";
import { Box, Image, Text } from "@chakra-ui/react";
import formatedRating from "../utils/formatedRating";
import StarRating from "../components/StarRating";
import { useSelector } from "react-redux";
import { Movie, MovieState } from "../types";
interface MovieDetailProps {
  id: string;
  movie: Movie;
}
interface LabelValueProps {
  movie: Movie;
}
export default function MovieDetail({
  id,
  movie: initialMovie,
}: MovieDetailProps) {
  const movies = useSelector(
    (state: { movies: MovieState }) => state.movies.movies
  );
  const movie = movies.filter((movie: Movie) => movie.id == id)[0];
  const LabelValue = ({ movie }: LabelValueProps) => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Text>Genre :</Text>
          <Text>Release Date :</Text>
          <Text>Average Rating :</Text>
        </div>
        <div
          style={{
            marginLeft: "8px",
          }}
        >
          <Text>{movie.genre}</Text>
          <Text>{movie.releaseDate}</Text>
          <Text>{formatedRating(movie.ratingList)}</Text>
        </div>
      </div>
    );
  };
  return (
    <>
      <Box
        mt={8}
        p="6"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image
          src={movie.thumbnail}
          alt={movie.title}
          style={{
            width: "20%",
          }}
        />
        <Text fontWeight="bold" fontSize="2xl" mt={4}>
          {movie.title}
        </Text>
        <LabelValue movie={movie} />
        <StarRating
          rating={movie.ratingList.length > 8 ? movie.ratingList[8] : 0}
          id={id}
        />
      </Box>
    </>
  );
}
