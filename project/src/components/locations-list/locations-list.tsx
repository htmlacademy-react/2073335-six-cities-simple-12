import { CITY_NAMES } from '../../constants/const';
import LocationsItem from '../locations-item/locations-item';

function LocationsList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITY_NAMES.map((city) => (<LocationsItem key={city} city={city} />))}
    </ul>
  );
}

export default LocationsList;
