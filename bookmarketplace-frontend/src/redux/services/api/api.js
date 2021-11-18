import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import url from '../../constants/environment';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => `/listings`,
    }),
    getDetailedListing: builder.query({
      query: (id) => `/listings/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListingsQuery, useGetDetailedListingQuery } = api