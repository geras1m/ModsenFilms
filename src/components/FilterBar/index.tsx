import { FilterBarContainer, FilterBarBox, FilterBarBody, FilterItem } from "@components/FilterBar/styled";
import { genres } from "@root/constants/constants";
import { setGenreId } from "@store/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";

export const FilterBar = () => {
  const { genreId } = useAppSelector((store) => store.movie);
  const dispatch = useAppDispatch();

  const getMoviesByGenre = (id: string) => {
    dispatch(setGenreId(id));
  };

  return (
    <FilterBarBox>
      <FilterBarContainer>
        <FilterBarBody>
          {genres.map((genre) => (
            <FilterItem
              key={genre.id}
              selected={genreId === genre.genreId}
              disabled={genreId === genre.genreId}
              onClick={() => getMoviesByGenre(genre.genreId as string)}
            >
              {genre.name}
            </FilterItem>
          ))}
        </FilterBarBody>
      </FilterBarContainer>
    </FilterBarBox>
  );
};
