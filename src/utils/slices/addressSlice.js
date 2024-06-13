import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProvince = createAsyncThunk('address/getProvince', async ({ token }, thunkAPI) => {
  console.log(token);
  try {
    const link = `http://localhost:8000/api/location/province`;
    const response = await axios.get(link, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    if (response.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const getCity = createAsyncThunk('address/getCity', async ({ id, token }, thunkAPI) => {
  try {
    const link = `http://localhost:8000/api/location/city?province=${id}`;
    const response = await axios.get(link, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    if (response.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const addAddress = createAsyncThunk('address/addAddress', async ({ dataa, token = '' }, thunkAPI) => {
  try {
    console.log(dataa);
    let link = `http://localhost:8000/api/address`;
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
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getAddress = createAsyncThunk('address/getAddress', async ({ token = '' }, thunkAPI) => {
  try {
    let link = `http://localhost:8000/api/address`;
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

export const addressSlice = createSlice({
  name: 'address',
  initialState: {
    isLoading: false,
    isError: false,
    errorMessage: '',
    addressData: [],
    provinceData: [],
    cityData: [],
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
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.addressData = payload.data;
        state.isLoading = false;
      })
      .addCase(addAddress.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload || 'failed to fetch cart';
      })
      .addCase(getProvince.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProvince.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.provinceData = payload.data.rajaongkir;
        state.isLoading = false;
      })
      .addCase(getProvince.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload || 'failed to fetch cart';
      })
      .addCase(getCity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCity.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.cityData = payload.data.rajaongkir.results;
        state.isLoading = false;
      })
      .addCase(getCity.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload || 'failed to fetch cart';
      })
      .addCase(getAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddress.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.addressData = payload.data;
        state.isLoading = false;
      })
      .addCase(getAddress.rejected, (state, { payload }) => {
        state.isLoading = true;
        state.isError = true;
        state.errorMessage = payload || 'failed to fetch cart';
      });
  },
});

export const addressSelector = (state) => state.address;
export const { clearState } = addressSlice.actions;
export default addressSlice.reducer;
