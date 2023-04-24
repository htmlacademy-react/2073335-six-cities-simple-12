import { Link } from 'react-router-dom';
import { CITY_NAMES } from '../../constants/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {updateOffers } from '../../store/action';

function LocationsItems(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector((state) => state.selectedCity);

  return (
    <>
      {
        CITY_NAMES.map((cityName) => (
          <li className="locations__item" key={cityName}>
            <Link
              className={`locations__item-link tabs__item ${cityName === currentLocation ? 'tabs__item--active' : ''} `}
              to="/"
              onClick={() => {dispatch(updateOffers(cityName));}}
            >
              <span>{cityName}</span>
            </Link>
          </li>
        ))
      }
    </>
  );
}
export default LocationsItems;

