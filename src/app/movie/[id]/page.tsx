import { fetchMovieById } from "../../../utils/fetchMovies";
import MovieDetail from "../../../components/MovieDetail";
import NoDataDisplay from "../../../components/NoDataDisplay";

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await fetchMovieById(params.id);
  if (!movie) {
    return (
      <>
        <NoDataDisplay></NoDataDisplay>
      </>
    );
  }

  return (
    <>
      <MovieDetail movie={movie} id={params.id}></MovieDetail>
    </>
  );
}
