import { api } from "./api";

export const listingsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getListings: builder.query({
          query: () => `/listings`,
        }),
        getListingsSearch: builder.query({
          query: (toSearch) => `/listings/s?toSearch=${toSearch}`,
        }),
        getDetailedListing: builder.query({
          query: (id) => `/listings/${id}`,
        }),
      }),
    overrideExisting: false,
})

export const { useGetListingsQuery, useGetListingsSearchQuery, useGetDetailedListingQuery } = listingsApi