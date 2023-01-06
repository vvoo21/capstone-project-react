import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fetchCrypto from '../redux/cryptoApi';
import '../styles/cryptos.css';

const Cryptos = () => {
  const state = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <div className="cryptos-container">
      {state.map((crypto) => (
        <div
          key={crypto.id}
          className="crypto"
        >
          <NavLink
            to={`/${crypto.id}`}
            className="crypto-link"
          >
            <img src={`https://www.cryptocompare.com/${crypto.img}`} alt="crypto-img" width="150" height="150" />
            <h2>{crypto.name}</h2>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Cryptos;
