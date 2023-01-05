import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fetchCrypto from '../redux/cryptoApi';

const Cryptos = () => {
  const state = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div>
      {state.map((crypto) => (
        <div key={crypto.id}>
          <NavLink
            to={`/${crypto.id}`}
          >
            <img src={`https://www.cryptocompare.com/${crypto.img}`} alt="crypto-img" />
            <h2>{crypto.name}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Cryptos;
