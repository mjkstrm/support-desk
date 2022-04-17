import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';

// Reducers from each created slice will be assigned here.
export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});
