import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoDetail = createAsyncThunk(
  'cryptoDetails/fetchCryptoDetail',
  async (id) => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=USD`,
    );
    const data = await response.json();
    const resultsDetails = data.DISPLAY[id].USD;
    return resultsDetails;
  },
);

const cryptoDetailsSlice = createSlice({
  name: 'cryptoDetails',
  initialState: {
    cryptoDetails: {},
  },
  reducers: {},

  extraReducers: {
    /* eslint-disable */
    [fetchCryptoDetail.fulfilled]: (state, action) => {
      state.cryptoDetails = action.payload;
    },
    /* eslint-enable */
  },
});

export default cryptoDetailsSlice.reducer;
