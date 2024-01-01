import { setPage } from "@store/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { Button } from "@components/ShowMoreBtn/styled";

export const ShowMoreBtn = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((store) => store.movie);

  const loadMoreMovies = () => {
    dispatch(setPage(page + 1));
  };

  return <Button onClick={loadMoreMovies}>Show More</Button>;
};
