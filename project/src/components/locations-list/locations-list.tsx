import LocationsItem from '../locations-item/locations-item';

function LocationsList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      <LocationsItem />
    </ul>
  );
}

export default LocationsList;
