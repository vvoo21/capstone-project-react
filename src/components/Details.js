import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCryptoDetail from '../redux/cryptoDetailsApi';

const Details = () => {
  const state = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCryptoDetail(id));
  }, [dispatch]);

  console.log(state);

  return (
    <div>
      {state.map((cryptoDetail) => (
        <div key={cryptoDetail.FROMSYMBOL}>
          <div>
            <img src={`https://www.cryptocompare.com/${cryptoDetail.IMAGEURL}`} alt="crypto-img" />
            <h2>{cryptoDetail.FROMSYMBOL}</h2>
          </div>
          <ul>
            <li>
              <p>
                The price is:
                <span>{cryptoDetail.PRICE}</span>
              </p>
            </li>
            <li>
              <p>
                The highest price of the day:
                <span>{cryptoDetail.HIGHDAY}</span>
              </p>
            </li>
            <li>
              <p>
                The lowest price of the day:
                <span>{cryptoDetail.LOWDAY}</span>
              </p>
            </li>
            <li>
              <p>
                Variation last 24 hours:
                <span>{cryptoDetail.CHANGEPCT24HOUR}</span>
              </p>
            </li>
            <li>
              <p>
                Last update:
                <span>{cryptoDetail.LASTUPDATE}</span>
              </p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Details;
