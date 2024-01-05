import { setPage } from "@store/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { Button } from "@components/ShowMoreBtn/styled";

interface IShowMoreBtn {
  isDisabled: boolean;
}

export const ShowMoreBtn = ({ isDisabled }: IShowMoreBtn) => {
  const dispatch = useAppDispatch();
  const { movies, page } = useAppSelector((store) => store.movie);

  const loadMoreMovies = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Button disabled={isDisabled || movies.length === 0} onClick={loadMoreMovies}>
      Show More
    </Button>
  );
};
