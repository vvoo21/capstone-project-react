import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto';
import cryptoDetailsReducer from './cryptoDetails';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    details: cryptoDetailsReducer,
  },
});

export default store;
