import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './reducers/listings/listingsSlice';
import { api } from './services/api/api';

const store = configureStore({
    reducer: {
      listings: listingsReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export default store;
