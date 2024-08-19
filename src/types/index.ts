export interface Movie {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  ratingList: number[];
  genre: string;
  releaseDate: string;
}
export interface MovieState {
  movies: Movie[];
  pageNo: number;
  key: string;
}
