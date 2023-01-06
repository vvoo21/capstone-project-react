import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto';
import cryptoDetailsSlice from './cryptoDetails';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    details: cryptoDetailsSlice,
  },
});

export default store;
