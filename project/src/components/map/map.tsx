import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect} from 'react';
import { Offer } from '../../types/offer';
import { Icon, Marker} from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';

type MapProps = {
rentalOffersOption: Offer[];
className: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({rentalOffersOption, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const offers = useAppSelector((state) => state.filteredOffers);
  const cityLocation = rentalOffersOption[0].city.location;
  const map = useMap(mapRef, cityLocation);
  const selectedOffers = useAppSelector((state) => state.selectedOfferId);


  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = cityLocation;
      map.flyTo([latitude, longitude], zoom);
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);

      rentalOffersOption.forEach(({id, city}) => {
        const marker = new Marker({
          lat: city.location.latitude,
          lng: city.location.longitude,
        });

        marker
          .setIcon(
            selectedOffers !== null && id === selectedOffers
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });


    }
  }, [map, offers, selectedOffers, cityLocation, rentalOffersOption]);


  return (
    <section className={`${className } map`} ref={mapRef}></section>
  );
}

export default Map;
