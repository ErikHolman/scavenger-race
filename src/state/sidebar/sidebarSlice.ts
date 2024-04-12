import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  value: boolean;
}

const initialState: SidebarState = {
  value: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleVisiblity: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleVisiblity } = sidebarSlice.actions;

export default sidebarSlice.reducer;
