import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetail from "../components/MovieDetail";
import { Movie, MovieState } from "../types";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import configureStore from "redux-mock-store";

// Mock store and initial state
const mockStore = configureStore([]);
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    genre: "Action/Sci-Fi",
    releaseDate: "2010-07-16",
    thumbnail: "https://example.com/inception.jpg",
    ratingList: [5, 4, 5, 3, 4],
  },
];
const initialState: { movies: MovieState } = {
  movies: {
    movies: mockMovies,
  },
};

// Mock utilities and components
jest.mock("../utils/formatedRating", () => jest.fn(() => "4.2"));
jest.mock("../components/StarRating", () => jest.fn(() => <div>Star Rating Component</div>));

describe("MovieDetail Component", () => {
  it("renders movie details correctly", () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ChakraProvider>
          <MovieDetail id="1" movie={mockMovies[0]} />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("Action/Sci-Fi")).toBeInTheDocument();
    expect(screen.getByText("2010-07-16")).toBeInTheDocument();
    expect(screen.getByText("4.2")).toBeInTheDocument();
  });

  it("renders movie image correctly", () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ChakraProvider>
          <MovieDetail id="1" movie={mockMovies[0]} />
        </ChakraProvider>
      </Provider>
    );

    const imageElement = screen.getByAltText("Inception");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockMovies[0].thumbnail);
  });

  it("renders StarRating component correctly", () => {
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <ChakraProvider>
          <MovieDetail id="1" movie={mockMovies[0]} />
        </ChakraProvider>
      </Provider>
    );

    expect(screen.getByText("Star Rating Component")).toBeInTheDocument();
  });
});
