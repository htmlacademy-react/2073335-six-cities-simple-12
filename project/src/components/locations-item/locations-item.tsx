import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/action';

type LocationsItemProps = {
    city: string;
    //onLocationItemClick: (city: string) => void;
   // isActive: boolean;
}

function LocationsItem({city}: LocationsItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  //const onLocationChange = (city: string) => dispatch(setCity(city));
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

