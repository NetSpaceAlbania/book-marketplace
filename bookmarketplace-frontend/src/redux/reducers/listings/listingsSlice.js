import { createSlice } from '@reduxjs/toolkit'

export const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    listings: [],
  },
  reducers: {
    addListings: (state, action) => {
      state.listings = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addListings } = listingsSlice.actions

export default listingsSlice.reducer