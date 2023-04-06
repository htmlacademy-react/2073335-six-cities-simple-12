import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action';

type LocationsItemProps = {
    city: string;
}

function LocationsItem({city}: LocationsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentLocation = useAppSelector((state) => state.defaultCity);


  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${city === currentLocation ? 'tabs__item--active' : ''}`} href="/#" onClick={(evt) =>{ evt.preventDefault(); dispatch(setCity(city));}}>
        <span>{city}</span>
      </a>
    </li>
  );
}
export default LocationsItem;

