import { configureStore } from '@reduxjs/toolkit';
import sidebarReduceer from './sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReduceer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
