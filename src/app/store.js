const { configureStore } = require('@reduxjs/toolkit');
import { signUpSlice } from '@/src/utils/slices/signUpSlice';
import { productSlice } from '@/src/utils/slices/productSlice';
import { cartSlice } from '@/src/utils/slices/cartSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   }),
});

export default store;
