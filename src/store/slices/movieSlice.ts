import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, ThemeType } from "@app-types/types";

interface IMovieState {
  movies: IMovie[] | [];
  page: number;
}

const initialState: IMovieState = {
  movies: [],
  page: 1,
};

export const appSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = [...state.movies, ...action.payload];
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { addMovies, setPage } = appSlice.actions;
export default appSlice.reducer;
