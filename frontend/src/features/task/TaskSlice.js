import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Service
import taskService from './TaskService'
// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));
// Initial state of the slice
const initialState = {
    hasError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    tasks: []
}

// Insert task
export const insertTask = createAsyncThunk('task/insertTask', async (data, thunkAPI) => {
    try {
        return await taskService.insertTask(user, data);
    } catch (error) {
        // Try to get message from the server response
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        // Return the error message to calling function
        return thunkAPI.rejectWithValue(message);
    }
});

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: { },
    // Extra reducres for different states in the server call
    extraReducers: (builder) => {
        builder
        // Insert task
        .addCase(insertTask.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(insertTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Add new entry to collection
            state.tasks.push(action.payload);
        })
        .addCase(insertTask.rejected, (state, action) => {
            state.hasError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
        })
    }
})

export default taskSlice.reducer;