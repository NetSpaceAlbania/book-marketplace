import { api } from "./api";

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getListings: builder.query({
          query: () => `/auth/login`,
        }),
      }),
    overrideExisting: false,
})

export const { } = authApi