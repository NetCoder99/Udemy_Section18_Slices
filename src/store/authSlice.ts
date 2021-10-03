import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------------------------
export interface authPayload { payload: {loginEmail: string} }
const initAuthState = {
  isAuthenticated: false,
  loginEmail: ""
};
export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initAuthState,
  reducers: {
    login(state, action: authPayload) {
      state.isAuthenticated = true;
      state.loginEmail = action.payload.loginEmail;
    },
    logout(state) { 
      state.isAuthenticated = false;
    }
  }
});

export const authActions    = authSlice.actions;