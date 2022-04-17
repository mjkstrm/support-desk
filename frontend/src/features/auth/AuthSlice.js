import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Service
import authService from './AuthService';
// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));
// Initial state of authentication
const initialState = {
    user: user ? user : null,
    hasError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register new user
export const registerUser = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (error) {
        // Try to get message from the server response
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        // Return the error message to calling function
        return thunkAPI.rejectWithValue(message);
    }
})
// Login existing user
export const loginUser = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        // Return the error message to calling function
        return thunkAPI.rejectWithValue(message);
    }
})
// Logout user
export const logoutUser = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
})

// Slice contains a collection of reducer logic and actions for each feature in the application.
export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.hasError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    // Extra reducers for different states in the server call.
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.hasError = true;
                // thunkAPI returns the message as a payload if an error occurs, which is registered as rejected call
                // so the actions payload will contain the message that was given in registerUser method
                state.message = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.hasError = true;
                state.message = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
    }
})
export const { reset } = authSlice.actions;
export default authSlice.reducer
