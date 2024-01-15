import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieResponse, IVideoResponse } from "@app-types/types";
import { languageUS } from "@constants/constants";
import * as process from "process";

const APP_AUTH_KEY = process.env.APP_AUTH_KEY;
const APP_BASIC_URL = process.env.APP_BASIC_URL;

export const movieApi = createApi({
  reducerPath: "movieApi",
  keepUnusedDataFor: 120,
  baseQuery: fetchBaseQuery({
    baseUrl: APP_BASIC_URL,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${APP_AUTH_KEY}`,
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovieResponse, { page: number; genre?: string | null }>({
      query: ({ page, genre = "" }) => ({
        url: "/discover/movie",
        method: "GET",
        params: { page, language: languageUS, with_genres: genre },
      }),
    }),
    getVideo: builder.query<IVideoResponse, { videoId: number }>({
      query: ({ videoId }) => ({
        url: `movie/${videoId}/videos`,
        method: "GET",
        params: { language: languageUS },
      }),
    }),
    findMoviesByTitle: builder.query<IMovieResponse, { title: string; page?: number }>({
      query: ({ title, page = 1 }) => ({
        url: "search/movie",
        method: "GET",
        params: { query: title, language: languageUS, page },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetVideoQuery, useFindMoviesByTitleQuery } = movieApi;
