import { configureStore } from '@reduxjs/toolkit';
import listingsReducer from './reducers/listingsSlice';
import authReducer from './reducers/authSlice';
import { api } from './services/api/api';

const store = configureStore({
    reducer: {
      listings: listingsReducer,
      auth: authReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export default store;
