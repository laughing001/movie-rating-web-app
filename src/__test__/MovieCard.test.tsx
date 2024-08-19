import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types";
import { ChakraProvider } from "@chakra-ui/react";

// Mock useRouter to prevent errors when using Next.js's Link component
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockMovie: Movie = {
  id: 1,
  title: "Inception",
  thumbnail: "https://example.com/inception.jpg",
  ratingList: [5, 4, 5, 3, 4],
};

jest.mock("../utils/formatedRating", () => ({
  __esModule: true,
  default: jest.fn(() => "4.2"), // Mock the formatted rating
}));

describe("MovieCard Component", () => {
  it("renders movie information correctly", () => {
    render(
      <ChakraProvider>
        <MovieCard movie={mockMovie} />
      </ChakraProvider>
    );

    const titleElement = screen.getByText(/inception/i);
    const ratingElement = screen.getByText(/rating: 4.2/i);
    const viewDetailsLink = screen.getByText(/view details/i);

    expect(titleElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
    expect(viewDetailsLink).toBeInTheDocument();
    expect(viewDetailsLink.closest("a")).toHaveAttribute(
      "href",
      `/movie/${mockMovie.id}`
    );
  });

  it("displays the correct image with the correct alt text", () => {
    render(
      <ChakraProvider>
        <MovieCard movie={mockMovie} />
      </ChakraProvider>
    );

    const imageElement = screen.getByAltText(/inception/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockMovie.thumbnail);
  });
});
