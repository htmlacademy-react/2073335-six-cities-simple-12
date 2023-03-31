import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { City, Offer } from '../../types/offer';
import { Icon, Marker } from 'leaflet';

type MapProps = {
city: City;
rentalOffersOption: Offer[];
className: string;
}

const defaultPin = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({city, rentalOffersOption, className}: MapProps): JSX.Element {
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

  return (
    <section className={`${className } map`} ref={mapRef}></section>
  );
}

export default Map;
