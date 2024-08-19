"use client";
import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMovieRating } from "../store/movieSlice";
import { Movie, MovieState } from '../types';

interface StarRatingProps {
  rating: number;
  id: number;
}

const StarRating = ({ rating, id }: StarRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const movies = useSelector((state: {movies: MovieState}) => state.movies.movies);
  const dispatch = useDispatch();
  const handleMouseEnter = (index: number) => setHoveredRating(index);
  const handleMouseLeave = () => setHoveredRating(0);
  const handleClick = (index: number) => {
    const movie = movies.filter((movie: Movie) => movie.id === id)[0];
    dispatch(
      updateMovieRating({
        id: id,
        rating: index,
      })
    );
  };

  return (
    <Box display="flex" alignItems="center" mt={12}>
      {Array.from({ length: 5 }, (_, index) => index + 1).map((starIndex) => (
        <Tooltip
          key={starIndex}
          label={`Rate ${starIndex} star(s)`}
          placement="top"
        >
          <Box
            as="button"
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
            p={1}
          >
            <Icon
              as={StarIcon}
              boxSize={6}
              color={
                starIndex <= (hoveredRating || rating)
                  ? "yellow.400"
                  : "gray.300"
              }
              transition="color 0.2s"
            />
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

export default StarRating;
