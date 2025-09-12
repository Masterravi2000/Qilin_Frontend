// reduxStore/api/writtenQuestions/writtenQuestions.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const writtenQuestionsApi = createApi({
  reducerPath: "writtenQuestionsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["WrittenQuestions"],
  endpoints: (builder) => ({
    getWrittenQuestions: builder.query<
      Array<{ name: string; required: boolean; keyboardType?: string }>,
      void
    >({
      query: () => "/api/v1/written-questions",
      transformResponse: (response: any) => response?.questions || [],
      providesTags: ["WrittenQuestions"],
    }),
  }),
});

// Export hook for usage in components
export const { useGetWrittenQuestionsQuery } = writtenQuestionsApi;
