const { configureStore } = require('@reduxjs/toolkit');
import { signUpSlice } from '@/src/utils/slices/signUpSlice';
import { productSlice } from '@/src/utils/slices/productSlice';

const store = configureStore({
  reducer: {
    signUp: signUpSlice.reducer,
    product: productSlice.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //     serializableCheck: false,
  //   }),
});

export default store;
