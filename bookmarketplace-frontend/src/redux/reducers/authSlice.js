import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    access: null,
    isAuthenticated: null,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      setCredentials: (
        state,
        { payload: { user, token } }
      ) => {
        state.user = user
        state.token = token
      },
    },
  })
  
  export const { setCredentials } = authSlice.actions
  
  export default authSlice.reducer
  
  export const selectCurrentUser = (state) => state.auth.user