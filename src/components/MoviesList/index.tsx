import { MovieListContent, MoviesListBox, MoviesListContainer } from "@components/MoviesList/styled";
import { MovieCard } from "@components/MovieCard";
import { useGetMoviesQuery } from "@store/api/movieApi";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { useEffect } from "react";
import { setMovies, setVideoId } from "@store/slices/movieSlice";
import { Skeleton } from "@components/Skeleton";
import { ShowMoreBtn } from "@components/ShowMoreBtn";
import { moviesPerPage } from "@root/constants/constants";
import { setIsVideoModalOpen } from "@store/slices/appSlice";

export const MoviesList = () => {
  const dispatch = useAppDispatch();
  const { movies, page, genreId } = useAppSelector((store) => store.movie);
  const {
    data: moviesByGenre,
    isFetching: isFetchingByGenre,
    isSuccess: isSuccessByGenre,
  } = useGetMoviesQuery({ page, genre: genreId }, { skip: false });

  useEffect(() => {
    moviesByGenre && isSuccessByGenre && dispatch(setMovies(moviesByGenre.results));
  }, [moviesByGenre, genreId]);

  const setVideoIdToState = (videoId: number) => {
    dispatch(setVideoId(videoId));
    dispatch(setIsVideoModalOpen(true));
  };

  const isLoading = isFetchingByGenre;

  const skeletons = [...new Array(moviesPerPage).fill("")].map((_, index) => <Skeleton key={index} />);

  const movieCards =
    movies.length !== 0 &&
    movies.map((movie, index) => (
      <MovieCard
        key={index}
        movieData={movie}
        isLoading={isLoading}
        onClick={() => setVideoIdToState(movie.id)}
      />
    ));

  return (
    <MoviesListBox>
      <MoviesListContainer>
        <MovieListContent>
          {movieCards}
          {isLoading && skeletons}
        </MovieListContent>
        <ShowMoreBtn isDisabled={isLoading} />
      </MoviesListContainer>
    </MoviesListBox>
  );
};
