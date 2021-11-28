import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import url from '../../constants/environment';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: () => ({}),
});