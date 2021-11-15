import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import url from '../../constants/environment';

// Define a service using a base URL and expected endpoints
export const listingsApi = createApi({
  reducerPath: 'listingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${url}/listings` }),
  endpoints: (builder) => ({
    getListings: builder.query({
      query: () => ``,
    }),
    getDetailedListing: builder.query({
      query: (id) => `${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListingsQuery, useGetDetailedListingQuery } = listingsApi