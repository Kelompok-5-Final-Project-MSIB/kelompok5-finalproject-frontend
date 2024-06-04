import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProductCart = createAsyncThunk('cart/getAllProductCart', async ({ token = '' }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/cart`;
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

export const addCart = createAsyncThunk('cart/addCart', async ({ id_product, token = '' }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/cart`;
    const response = await axios.post(
      link,
      { id_product },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
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

export const deleteCart = createAsyncThunk('cart/deleteCart', async ({ id, token = '' }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/cart/${id}`;
    const response = await axios.delete(link, {
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

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    cartProduct: [],
    selectedProducts: [],
    isSelectAll: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSelectAll = false;
      state.selectedProducts = [];
      return state;
    },
    toggleProductSelection: (state, { payload }) => {
      const { id_product, price, isChecked } = payload;
      if (isChecked) {
        state.selectedProducts.push({ id: id_product, price });
      } else {
        state.selectedProducts = state.selectedProducts.filter((product) => product.id !== id_product);
      }
      state.isSelectAll = state.selectedProducts.length === state.cartProduct.data.length;
    },
    selectAllProducts: (state, { payload }) => {
      const { products, isChecked } = payload;
      state.isSelectAll = isChecked;
      if (isChecked) {
        state.selectedProducts = products.map((product) => ({ id: product.id_product, price: product.price }));
      } else {
        state.selectedProducts = [];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProductCart.fulfilled, (state, { payload }) => {
        state.cartProduct = payload.data;
        state.isLoading = false;
      })
      .addCase(getAllProductCart.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch cart';
      })
      .addCase(addCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCart.fulfilled, (state, { payload }) => {
        state.cartProduct = payload.data;
        state.isLoading = false;
      })
      .addCase(addCart.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload || 'failed to fetch cart';
      })
      .addCase(deleteCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCart.fulfilled, (state, { payload }) => {
        state.cartProduct = payload.data;
        state.isLoading = false;
      })
      .addCase(deleteCart.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch cart';
      });
  },
});

export const cartSelector = (state) => state.cart;
export const { clearState, toggleProductSelection, selectAllProducts } = cartSlice.actions;
export default cartSlice.reducer;
