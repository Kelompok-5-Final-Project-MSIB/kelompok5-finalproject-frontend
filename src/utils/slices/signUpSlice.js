import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.API_URL;

export const signUpUser = createAsyncThunk(
  'signUp/signUpUser',
  async ({ name, email, password, password_confirmation }, thunkAPI) => {
    try {
      let link = `http://localhost:8000/api/register`;
      const params = {
        name,
        email,
        password,
        password_confirmation,
      };

      const response = await axios.post(link, params, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      let data = await response.data;
      if (response.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log('error', error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const signUpAdmin = createAsyncThunk('signUp/signUpAdmin', async ({ userData, token }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/addAdmin`;
    const response = await axios.post(link, userData, {
      headers: {
        'Content-Type': 'application/json',
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
    console.log('error', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload?.message;
      })
      .addCase(signUpUser.pending, (state) => {
        state.isFetching = true;
      })

      .addCase(signUpAdmin.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      })
      .addCase(signUpAdmin.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload?.message;
      })
      .addCase(signUpAdmin.pending, (state) => {
        state.isFetching = true;
      });
  },
});

export const { clearState } = signUpSlice.actions;

export const signupSelector = (state) => state.signUp;
