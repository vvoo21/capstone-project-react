import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCrypto } from './crypto';

const baseUrl = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
const FETCH_CRYPTO = 'crypto/FETCH_CRYPTO';

const fetchCrypto = createAsyncThunk(FETCH_CRYPTO, async (_, thunkAPI) => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const cryptosArray = data.Data.map((crypto) => ({
    id: crypto.CoinInfo.Name,
    name: crypto.CoinInfo.FullName,
    img: crypto.CoinInfo.ImageUrl,
  }));

  thunkAPI.dispatch(getCrypto(cryptosArray));

  return cryptosArray;
});

export default fetchCrypto;
