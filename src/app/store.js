const { configureStore } = require('@reduxjs/toolkit');
import { signUpSlice } from '@/src/utils/slices/signUpSlice';
import { productSlice } from '@/src/utils/slices/productSlice';
import { cartSlice } from '@/src/utils/slices/cartSlice';
import { profileSlice } from '@/src/utils/slices/profileSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    profile: profileSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   }),
});

export default store;
