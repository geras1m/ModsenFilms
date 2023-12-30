import { configureStore } from "@reduxjs/toolkit";
import appSlice from "@store/slices/appSlice";
import { movieApi } from "@store/api/movieApi";
import movieSlice from "@store/slices/movieSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    movie: movieSlice,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
