const { configureStore } = require('@reduxjs/toolkit');
import { signUpSlice } from '@/src/utils/slices/signUpSlice';
import { productSlice } from '@/src/utils/slices/productSlice';
import { cartSlice } from '@/src/utils/slices/cartSlice';
import { profileSlice } from '@/src/utils/slices/profileSlice';
import { addressSlice } from '@/src/utils/slices/addressSlice';
import { paymentSlice } from '@/src/utils/slices/paymentSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    profile: profileSlice.reducer,
    address: addressSlice.reducer,
    payment: paymentSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
