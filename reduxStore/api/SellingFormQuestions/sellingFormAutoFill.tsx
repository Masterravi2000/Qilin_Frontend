// reduxStore/api/sellingForm/sellingFormAutoFill.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sellingFormApi = createApi({
    reducerPath: "sellingFormApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
        prepareHeaders: (headers, { endpoint }) => {
            // Only set JSON if not sending FormData
            if (endpoint !== "aiUploadImages") {
                headers.set("Content-Type", "application/json");
            }
            return headers;
        },
    }),
    tagTypes: ["SellingForm"],
    endpoints: (builder) => ({
        aiUploadImages: builder.mutation<{ urls: string[] }, FormData>({
            query: (formData) => ({
                url: "/api/ai/ai-upload",
                method: "POST",
                body: formData,
            }),
        }),
        aiGenerateAttributes: builder.mutation<
            { attributes: Record<string, any> },
            { image_urls: string[] }
        >({
            query: (body) => ({
                url: "/api/ai/cataloger",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useAiUploadImagesMutation,
    useAiGenerateAttributesMutation,
} = sellingFormApi;
