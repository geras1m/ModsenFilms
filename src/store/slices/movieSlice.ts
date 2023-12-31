import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, ThemeType } from "@app-types/types";

interface IMovieState {
  movies: IMovie[] | [];
  page: number;
  videoId: number;
  isModalOpened: boolean;
}

const initialState: IMovieState = {
  movies: [],
  page: 1,
  videoId: 0,
  isModalOpened: false,
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
    setVideoId: (state, action: PayloadAction<number>) => {
      state.videoId = action.payload;
      state.isModalOpened = true;
    },
    setIsModalOpened: (state, action: PayloadAction<boolean>) => {
      state.isModalOpened = action.payload;
    },
  },
});

export const { addMovies, setPage, setVideoId, setIsModalOpened } = appSlice.actions;
export default appSlice.reducer;
