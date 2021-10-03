import { createSlice } from '@reduxjs/toolkit';

// ------------------------------------------------------------------------------------------
const initStateToggle = {showCount: true};
export const toggleSlice = createSlice({
  name: 'myToggleSlice',
  initialState: initStateToggle,
  reducers: {
    toggle(state) {state.showCount = !state.showCount},
  }
});

export const toggleActions  = toggleSlice.actions;
