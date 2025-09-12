// reduxStore/api/filters/categoryApi.tsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface HomeCategoryResponse {
  success: boolean;
  options: string[];
}

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_BASE_URL }),
  tagTypes: ["Categories"],
  endpoints: (builder) => ({
    getHomeCategories: builder.query<HomeCategoryResponse, void>({
      query: () => "/api/home-category", // backend endpoint we created
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetHomeCategoriesQuery } = categoryApi;
