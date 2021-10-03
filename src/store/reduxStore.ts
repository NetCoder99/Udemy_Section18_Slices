import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from "./counterSlice";
import { authSlice } from "./authSlice";
import { toggleSlice } from "./toggleSlice";

const reducerMap = {
  counter: counterSlice.reducer,
  toggle:  toggleSlice.reducer,
  auth:    authSlice.reducer,
};
const reduxStore = configureStore({reducer: reducerMap});
export default reduxStore;




