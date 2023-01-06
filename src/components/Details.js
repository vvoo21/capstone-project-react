import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCryptoDetail } from '../redux/cryptoDetails';
import '../styles/details.css';

const Details = () => {
  const state = useSelector((state) => state.details.cryptoDetails);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCryptoDetail(id));
  }, [dispatch, id]);

  return (
    <div className="details-container">
      <div>
        <img
          src={`https://www.cryptocompare.com/${state.IMAGEURL}`}
          alt={state.FROMSYMBOL}
          width="150"
          height="150"
        />
        <h2 className="text-symbol">
          Symbol:
          &nbsp;
          {state.FROMSYMBOL}
        </h2>
      </div>
      <ul className="details-list">
        <li>
          <p className="info-text">coin information</p>
        </li>
        <li>
          <p className="info-text">
            The price is:
            &nbsp;
            {state.PRICE}
          </p>
        </li>
        <li>
          <p className="info-text">
            The highest price of the day:
            &nbsp;
            {state.HIGHDAY}
          </p>
        </li>
        <li>
          <p className="info-text">
            The lowest price of the day:
            &nbsp;
            {state.LOWDAY}
          </p>
        </li>
        <li>
          <p className="info-text">
            Variation last 24 hours:
            &nbsp;
            {state.CHANGEPCT24HOUR}
          </p>
        </li>
        <li>
          <p className="info-text">
            Last update:
            &nbsp;
            {state.LASTUPDATE}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Details;
