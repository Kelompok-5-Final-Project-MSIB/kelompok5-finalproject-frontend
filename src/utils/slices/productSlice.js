import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProduct = createAsyncThunk('product/getAllProduct', async ({ current = 1, name = '' }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/products?page=${current}&search=${name}`;
    const response = await axios.get(link);
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

export const getProductById = createAsyncThunk('product/getProductById', async (id, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/products/${id}`;
    const response = await axios.get(link);
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

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    currentPage: 1,
    product: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      return state;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, { payload }) => {
        state.product = payload.data;
        state.isLoading = false;
      })
      .addCase(getAllProduct.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.product = payload.data;
        state.isLoading = false;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      });
  },
});

export const productSelector = (state) => state.product;
export const { clearState, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
