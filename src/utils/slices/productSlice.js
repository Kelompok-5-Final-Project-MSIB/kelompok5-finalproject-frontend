import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllProduct = createAsyncThunk(
  'product/getAllProduct',
  async ({ current = 1, name = '', token = '', id = '', brand = '' }, thunkAPI) => {
    try {
      let link = `http://localhost:8000/api/products?id=${id}&page=${current}&search=${name}&brand=${brand}`;
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
      console.log('error', error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getProductById = createAsyncThunk('product/getProductById', async ({ id, token }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/products/${id}`;
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
    console.log('error', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateProduct = createAsyncThunk('product/updateProduct', async ({ dataa, id, token }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/products/${id}`;
    const response = await axios.post(link, dataa, {
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
    console.log('error', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const deleteProduct = createAsyncThunk('product/deleteProduct', async ({ id, token }, { dispatch }) => {
  try {
    let link = `http://localhost:8000/api/products/${id}`;
    const response = await axios.delete(link, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    let data = await response.data;
    if (response.status === 200) {
      dispatch(getAllProduct({ current: 1, name: '' }));
      return id;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error) {
    console.log('error', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getBrand = createAsyncThunk('product/getBrand', async ({ token }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/brands`;
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
    console.log('error', error.response.data);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createProduct = createAsyncThunk('product/createProduct', async ({ dataa, token }, thunkAPI) => {
  try {
    const formData = new FormData();
    formData.append('name_product', dataa.name_product);
    formData.append('brand', dataa.brand);
    formData.append('price', dataa.price);
    formData.append('discount', dataa.discount);
    formData.append('size', dataa.size);
    formData.append('status', dataa.status);
    formData.append('desc', dataa.desc);
    formData.append('image', dataa.image);
    formData.append('image2', dataa.image2);
    formData.append('image3', dataa.image3);
    const response = await axios.post('http://localhost:8000/api/products', formData, {
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
    // console.log('error', error.response.data);
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
    productById: [],
    brands: [],
    productCheckout: [],
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.productCheckout = [];
      return state;
    },
    addItemToCheckout: (state, { payload }) => {
      state.productCheckout = payload;
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
        state.productById = payload.data;
        state.isLoading = false;
      })
      .addCase(getProductById.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.product.data = state.product.data.filter((product) => product.id_product !== payload);
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, { payload }) => {
        state.productById = payload;
        state.isLoading = false;
      })
      .addCase(createProduct.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, { payload }) => {
        state.productById = payload;
        state.isLoading = false;
      })
      .addCase(updateProduct.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      })
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrand.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.brands = payload.data;
        state.isLoading = false;
      })
      .addCase(getBrand.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload?.message || 'failed to fetch products';
      });
  },
});

export const productSelector = (state) => state.product;
export const { clearState, setCurrentPage, addItemToCheckout } = productSlice.actions;
export default productSlice.reducer;
