// actions
const GET_CRYPTO_DETAILS = 'cryptoDetails/GET_CRYPTO_DETAILS';

// reducer
const initialState = [];

const cryptoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_CRYPTO_DETAILS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

// action creator
export const getCryptoDetails = (payload) => ({
  type: GET_CRYPTO_DETAILS,
  payload,
});

export default cryptoDetailsReducer;
