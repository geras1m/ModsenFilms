import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DisplayNowType, IMovie } from "@app-types/types";

interface IMovieState {
  movies: IMovie[] | [];
  page: number;
  videoId: number;
  genreId: string;
  displayNow: DisplayNowType;
  searchTitle: string;
}

const initialState: IMovieState = {
  movies: [],
  page: 1,
  videoId: 0,
  genreId: "",
  displayNow: "default",
  searchTitle: "",
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
    },
    setGenreId: (state, action: PayloadAction<string>) => {
      state.genreId = action.payload;
    },
    clearMovies: (state) => {
      state.movies = [];
    },
    setDisplayNow: (state, action: PayloadAction<DisplayNowType>) => {
      state.displayNow = action.payload;
    },
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
  },
});

export const { setMovies, setPage, setVideoId, setGenreId, clearMovies, setDisplayNow, setSearchTitle } =
  appSlice.actions;
export default appSlice.reducer;
