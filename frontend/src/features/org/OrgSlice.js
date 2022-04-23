import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Service
import orgService from './OrgService'
// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));
// Initial state
const initialState = {
    hasError: false,
    isLoading: false,
    isSuccess: false,
    message: '',
    organizations: [],
}

// Get user organizations
export const getUserOrganizations = createAsyncThunk('org/getUserOrganizations', async (thunkAPI) => {
    try {
        return await orgService.getUserOrganizations(user);
    } catch (error) {
        // Try to get message from the server response
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        // Return the error message to calling function
        return thunkAPI.rejectWithValue(message);
    }
})
// Insert organization
export const insertOrganization = createAsyncThunk('org/insertOrganization', async (data, thunkAPI) => {
    try {
        return await orgService.insertOrganization(user, data);
    } catch (error) {
        // Try to get message from the server response
        const message = (error.response && error.response.data && error.reponse.data.message) || error.message || error.toString();
        // Return the error message to calling function
        return thunkAPI.rejectWithValue(message);
    }
})

export const orgSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {},
    // Extra reducers for different states in the server call.
    extraReducers: (builder) => {
        builder
        // Get user organizations
        .addCase(getUserOrganizations.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(getUserOrganizations.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.organizations = action.payload;
        })
        .addCase(getUserOrganizations.rejected, (state, action) => {
            state.isLoading = false;
            state.hasError = true;
            // thunkAPI returns the message as a payload if an error occurs, which is registered as rejected call
            // so the actions payload will contain the message that was given in registerUser method
            state.message = action.payload;
        })
        // Insert user organization
        .addCase(insertOrganization.pending, (state, action) => {
            state.isLoading = true;
        })
        .addCase(insertOrganization.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            // Add new entry to collection
            state.organizations.push(action.payload);
        })
        .addCase(insertOrganization.rejected, (state, action) => {
            state.hasError = true;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = action.payload;
        })
    }
})

export default orgSlice.reducer;