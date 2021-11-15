import { configureStore } from '@reduxjs/toolkit';
import { listingsApi } from './services/listings/listingsApi';

const store = configureStore({
    reducer: {
      [listingsApi.reducerPath]: listingsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(listingsApi.middleware),
  });

export default store;
