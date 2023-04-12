import { Link } from 'react-router-dom';
import { CITY_NAMES } from '../../constants/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {loadOffers, setCity, updateOffers } from '../../store/action';

function LocationsItem(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector((state) => state.selectedCity);
  const cityNames = Object.values(CITY_NAMES);
  const offers = useAppSelector((state) => state.offers);


  return (
    <>
      {
        cityNames.map((cityName) => (
          <li className="locations__item" key={cityName}>
            <Link
              className={`locations__item-link tabs__item ${cityName === currentLocation ? 'tabs__item--active' : ''} `}
              to="/"
              onClick={() => { dispatch(setCity(cityName)); dispatch(loadOffers(offers)); dispatch(updateOffers({checkCity: cityName}));}}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        ))
      }
    </>
  );
}
export default LocationsItem;

