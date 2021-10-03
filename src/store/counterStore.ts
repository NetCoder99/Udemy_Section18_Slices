//import { createStore } from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';

export const initStateCounter = {counter: 0, showCount: true};
interface actionSliceObj { type: string, payload: {amount: number} }

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: initStateCounter,
  reducers: {
    increment(state, action: actionSliceObj) {state.counter =  state.counter + action.payload.amount },
    decrement(state) {state.counter--},
    reset(state) {state.counter = 0},
    toggle(state) {state.showCount = !state.showCount},
  }
});

const initStateToggle = {showCount: true};
const toggleSlice = createSlice({
  name: 'myToggleSlice',
  initialState: initStateToggle,
  reducers: {
    toggle(state) {state.showCount = !state.showCount},
  }
});

export const counterActions = counterSlice.actions;
export const toggleActions  = toggleSlice.actions;

const reducerMap = {
  counter: counterSlice.reducer,
  toggle:  toggleSlice.reducer,
};
const counterStore = configureStore({reducer: reducerMap});
export default counterStore;

