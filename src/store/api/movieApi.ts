import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieResponse, IVideoResponse } from "@app-types/types";
import { languageUS } from "@root/constants/constants";

//TODO вынести ключ в env
//TODO error boundary and genres

export const movieApi = createApi({
  reducerPath: "movieApi",
  keepUnusedDataFor: 120,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjU5ZDM2M2UwZjk4NmM3M2UxMjBmNjk0MDE1ZjI2MiIsInN1YiI6IjY1OGZlMDNmZjVmMWM1NzY5MDAwN2M4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dJ2Sqy7Qz-8i5Fm2AzbAhrq5h9sxFaXJDgHALdqWKkM",
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovieResponse, { page: number; genre?: string }>({
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
  }),
});

export const { useGetMoviesQuery, useGetVideoQuery } = movieApi;
