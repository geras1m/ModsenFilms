import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieResponse } from "@app-types/types";
import { languageUS } from "@root/constants/constants";

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
    getMovies: builder.query<IMovieResponse, { page: number }>({
      query: ({ page }) => ({
        url: "/movie/popular",
        method: "GET",
        params: { page, language: languageUS },
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
