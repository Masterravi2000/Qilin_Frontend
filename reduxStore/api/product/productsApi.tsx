// reduxStore/api/products/productsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  _id: string;
  productName: string;
  description?: string;
  images: string[];
  price: string;
  originalPrice?: string;
  selectedValues?: string;
  writtenValues?: string;
  details?: {
    brand: string;
    color: string;
    material: string;
    category: string;
    condition: string;
    size: string;
  };
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState, endpoint }) => {
      // Only set JSON if not sending FormData
      if (endpoint !== "addProduct") {
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (formData) => ({
        url: "/api/v1/products",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Products"], // automatically refetch product list if needed
    }),
    getProducts: builder.query({
      query: ({ page = 1, limit = 10 }) => {
        const params = new URLSearchParams({ page: page.toString(), limit: limit.toString() }).toString();
        return `/api/v1/products?${params}`;
      },
      providesTags: ["Products"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/api/v1/products/${id}` // your backend endpoint
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery, useGetProductByIdQuery } = productsApi;
