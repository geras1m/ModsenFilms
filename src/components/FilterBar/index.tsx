import {
  FilterBarContainer,
  FilterBarBox,
  FilterBarBody,
  FilterItem,
} from "@components/FilterBar/styled";
import { genres } from "@root/constants/constants";

export const FilterBar = () => {
  return (
    <FilterBarBox>
      <FilterBarContainer>
        <FilterBarBody>
          {genres.map((genre) => (
            <FilterItem key={genre.id}>{genre.name}</FilterItem>
          ))}
        </FilterBarBody>
      </FilterBarContainer>
    </FilterBarBox>
  );
};
