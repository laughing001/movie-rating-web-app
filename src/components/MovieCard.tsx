"use client";

import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import formatedRating from "../utils/formatedRating";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} passHref>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        border="1px solid #E2E8F0"
        width="240px"
      >
        <Image
          src={movie.thumbnail}
          alt={movie.title}
          style={{
            width: "100%",
            height: "340px",
          }}
        />
        <Box p="6">
          <Text fontWeight="bold" fontSize="2xl">
            {movie.title}
          </Text>
          <Text fontSize="xl">Rating: {formatedRating(movie.ratingList)}</Text>
          <Text mt={2} color="blue.500">
            View Details
          </Text>
        </Box>
      </Box>
    </Link>
  );
}
