import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { DisplayNowValue } from "@app-types/types";
import { genres, withoutGenre } from "@constants/constants";
import { clearMovies, setDisplayNow, setGenreId, setPage } from "@store/slices/movieSlice";
import { FilterBarContainer, FilterBarBox, FilterBarBody, FilterItem } from "@components/FilterBar/styled";

export const FilterBar = () => {
  const { genreId } = useAppSelector((store) => store.movie);
  const dispatch = useAppDispatch();

  const getMoviesByGenre = (id: string) => {
    dispatch(setDisplayNow(DisplayNowValue.default));
    dispatch(setGenreId(id));
    dispatch(setPage(1));
    if (genreId !== id) {
      dispatch(clearMovies());
    }
  };

  return (
    <FilterBarBox>
      <FilterBarContainer>
        <FilterBarBody>
          {genres.map((genre) => {
            const isSelected =
              (genreId === withoutGenre && genre.genreId === genres[0].genreId) || genreId === genre.genreId;
            return (
              <FilterItem
                key={genre.id}
                selected={isSelected}
                onClick={() => getMoviesByGenre(genre.genreId as string)}
              >
                {genre.name}
              </FilterItem>
            );
          })}
        </FilterBarBody>
      </FilterBarContainer>
    </FilterBarBox>
  );
};
