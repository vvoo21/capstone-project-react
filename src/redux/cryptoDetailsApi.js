import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCryptoDetails } from './cryptoDetails';

const FETCH_CRYPTO_DETAIL = 'crypto/FETCH_CRYPTO_DETAIL';

const fetchCryptoDetail = createAsyncThunk(FETCH_CRYPTO_DETAIL, async (id, thunkAPI) => {
  const response = await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${id}&tsyms=USD`);
  const data = await response.json();
  console.log(data);
  const resultsDetails = data.DISPLAY[id].USD;

  thunkAPI.dispatch(getCryptoDetails(resultsDetails));

  return resultsDetails;
});

export default fetchCryptoDetail;
