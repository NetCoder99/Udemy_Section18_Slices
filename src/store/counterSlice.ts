import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------------------------
export interface counterPayload { type: string, payload: {amount: number} }
export const     initCounter = {counter: 0, showCount: true};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: initCounter,
  reducers: {
    increment(state, action: counterPayload) {state.counter =  state.counter + action.payload.amount },
    decrement(state) {state.counter--},
    reset(state) {state.counter = 0},
    toggle(state) {state.showCount = !state.showCount},
  }
});

export const counterActions = counterSlice.actions;
