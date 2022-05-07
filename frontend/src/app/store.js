import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/AuthSlice';
import orgReducer from '../features/org/OrgSlice';
import taskReducer from '../features/task/TaskSlice';

// Reducers from each created slice will be assigned here.
export const store = configureStore({
  reducer: {
    auth: authReducer,
    org: orgReducer,
    task: taskReducer
  },
});
