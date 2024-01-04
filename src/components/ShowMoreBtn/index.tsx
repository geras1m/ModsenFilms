import { setPage } from "@store/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { Button } from "@components/ShowMoreBtn/styled";

interface IShowMoreBtn {
  isDisabled: boolean;
}

// TODO скрывать кнопку при ненайденых фильмах

export const ShowMoreBtn = ({ isDisabled }: IShowMoreBtn) => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((store) => store.movie);

  const loadMoreMovies = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <Button disabled={isDisabled} onClick={loadMoreMovies}>
      Show More
    </Button>
  );
};
