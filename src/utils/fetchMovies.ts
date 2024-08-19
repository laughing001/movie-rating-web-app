import moviesData from '../data/movies.json'; 
export async function fetchMovies(page = 1, pageSize = 20, key="") {
  key = key.trim();
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  if(key) {
    const filteredMovies = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(key.toLowerCase())
    );
    return filteredMovies.slice(start, end);
  } else {
    return moviesData.slice(start, end);
  }
  
}
export const fetchMovieById = async (id: string) => {
  return moviesData.find(movie => movie.id === id);
};
