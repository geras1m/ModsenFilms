import { allGenres } from "@root/constants/constants";

type ParseGenresType = (genres: number[]) => string;

export const parseGenres: ParseGenresType = (genres) => {
  const result = [];

  for (let i = 0; i < allGenres.length; i++) {
    if (genres.includes(allGenres[i].id)) {
      result.push(allGenres[i].name);
    }
  }
  return result.join(" / ");
};
