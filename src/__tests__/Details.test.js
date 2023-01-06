import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import cryptoDetailsSlice from '../redux/cryptoDetails';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      details: cryptoDetailsSlice,
    },
  });

  return store;
};
export default createTestStore;

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer.create(
      <Provider store={store}>
        <Details />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});