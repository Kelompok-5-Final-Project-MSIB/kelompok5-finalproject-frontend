import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const addPayment = createAsyncThunk('payment/addPayment', async ({ token = '' }, thunkAPI) => {
  console.log(token);
  try {
    let link = `http://localhost:8000/api/payment`;
    const response = await axios.post(
      link,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    let data = await response.data;
    console.log(data);
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

export const callbackPayment = createAsyncThunk('payment/callbackPayment', async ({ order_id }, thunkAPI) => {
  console.log(order_id);
  try {
    let link = `http://localhost:8000/api/callback/${order_id}`;
    const response = await axios.get(link);
    let data = await response.data;
    console.log(data);
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

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    paymentData: [],
    callback: [],
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
      .addCase(addPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPayment.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.paymentData = payload;
        state.isLoading = false;
      })
      .addCase(addPayment.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch profile';
      })

      .addCase(callbackPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(callbackPayment.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.callback = payload;
        state.isLoading = false;
      })
      .addCase(callbackPayment.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch profile';
      });
  },
});

export const { clearState } = paymentSlice.actions;
export default paymentSlice.reducer;
export const paymentSelector = (state) => state.payment;
