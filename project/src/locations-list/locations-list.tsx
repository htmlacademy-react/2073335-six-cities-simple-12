import { CITY_NAMES } from '../components/const';
import LocationsItem from '../components/locations-item/locations-item';

//type LocationsListProps = {
//onLocationChange: (city: string) => void;
//currentCity: string;
//}

function LocationsList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {CITY_NAMES.map((city) => (<LocationsItem key={city} city={city} />))}
    </ul>
  );
}

export default LocationsList;
