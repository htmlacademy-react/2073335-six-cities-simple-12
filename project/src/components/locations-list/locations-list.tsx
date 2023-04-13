import LocationsItems from '../locations-items/locations-items';

function LocationsList(): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      <LocationsItems />
    </ul>
  );
}

export default LocationsList;
