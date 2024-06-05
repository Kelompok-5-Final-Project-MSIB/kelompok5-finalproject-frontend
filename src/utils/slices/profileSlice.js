import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserData = createAsyncThunk('profile/getUserData', async ({ token = '' }, thunkAPI) => {
  console.log(token);
  try {
    let link = `http://localhost:8000/api/profile`;
    const response = await axios.get(link, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.data;
    if (response.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    userData: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.userData = payload.data;
        state.isLoading = false;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch profile';
      });
  },
});

export const { clearState } = profileSlice.actions;
export default profileSlice.reducer;
export const profileSelector = (state) => state.profile;
