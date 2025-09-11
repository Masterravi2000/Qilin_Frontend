// reduxStore/api/optionalQuestions/optionalQuestions.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log("EXPO_PUBLIC_BASE_URL:", process.env.EXPO_PUBLIC_BASE_URL);

export const optionalQuestionsApi = createApi({
  reducerPath: "optionalQuestionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["OptionalQuestions"],
  endpoints: (builder) => ({
    getOptionalQuestions: builder.query<any[], void>({
      query: () => "/api/v1/optional-questions",
      transformResponse: (response: any) => response?.questions || [],
      providesTags: ["OptionalQuestions"],
    }),
  }),
});

export const { useGetOptionalQuestionsQuery } = optionalQuestionsApi;
