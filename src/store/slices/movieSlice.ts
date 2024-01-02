import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "@app-types/types";

interface IMovieState {
  movies: IMovie[] | [];
  page: number;
  videoId: number;
  isModalOpened: boolean;
  genreId: string;
}

const initialState: IMovieState = {
  movies: [],
  page: 1,
  videoId: 0,
  isModalOpened: false,
  genreId: "",
};

export const appSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
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
    setGenreId: (state, action: PayloadAction<string>) => {
      state.genreId = action.payload;
      state.page = 1;
      state.movies = [];
    },
  },
});

export const { setMovies, setPage, setVideoId, setIsModalOpened, setGenreId } = appSlice.actions;
export default appSlice.reducer;
