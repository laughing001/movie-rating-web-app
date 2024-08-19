import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, MovieState } from "../types";

const initialState: MovieState = {
  movies: [],
  pageNo: 2,
  key: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      const mapA = new Map(state.movies.map((item) => [item.id, item]));
      state.movies = state.movies.concat(
        action.payload.filter((item) => !mapA.has(item.id))
      );
    },
    clearMovies: (state) => {
      state.movies = [];
    },
    setPageNo: (state, action: PayloadAction<number>) => {
      state.pageNo = action.payload;
    },
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    updateMovieRating: (
      state,
      action: PayloadAction<{ id: number; rating: number }>
    ) => {
      const movie = state.movies.find((m) => m.id === action.payload.id);
      if (movie) {
        movie.ratingList[8] = action.payload.rating; //这里当前用户的评分都默认放在第8位，回显时也从这里取
      }
    },
  },
});

export const { setMovies, updateMovieRating, setPageNo, clearMovies, setKey } =
  movieSlice.actions;
export default movieSlice.reducer;
