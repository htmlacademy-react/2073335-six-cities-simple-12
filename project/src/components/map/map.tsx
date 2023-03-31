import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { City, Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';
import { MapClasses } from '../const';

type MapProps = {
city: City;
rentalOffersOption: Offer[];
isNearCard: boolean;
}

const defaultPin = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({city, rentalOffersOption, isNearCard}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      rentalOffersOption.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        },
        {
          icon: defaultPin
        });
        marker.addTo(map);
      }
      );
    }
  }, [map, rentalOffersOption]);

  return(
    <section className={isNearCard ? MapClasses.PropertyMap : MapClasses.CitiesMap}ref={mapRef}></section>
  );
}

export default Map;
