// actions
const GET_CRYPTO = 'crypto/GET_CRYPTO';

// reducer
const initialState = [];

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      return action.payload;
    default:
      return state;
  }
};

// action creator
export const getCrypto = (payload) => ({
  type: GET_CRYPTO,
  payload,
});

export default cryptoReducer;
