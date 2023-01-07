import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fetchCrypto from '../redux/cryptoApi';
import '../styles/cryptos.css';
import searchIcon from '../images/icons8-search-30.png';
import cryptosImages from '../images/crypto_set.jpg';

const Cryptos = () => {
  const state = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = state.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <>
      <div className="cryptos-search">
        <form className="form">
          <input
            className="input"
            type="text"
            value={search}
            aria-label="search"
            onChange={handleChange}
          />
          <img src={searchIcon} alt="search-icon" />
        </form>
        <img
          src={cryptosImages}
          alt="by myriammira on Freepik"
          width="400"
          height="200"
        />
      </div>
      <div className="cryptos-container">
        {filtered.map((crypto) => (
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
    </>
  );
};

export default Cryptos;
