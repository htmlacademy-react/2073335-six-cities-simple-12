import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect} from 'react';
import { Icon, Marker} from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppSelector } from '../../hooks';

type MapProps = {
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

function Map({className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const offers = useAppSelector((state) => state.filteredOffers);
  const cityLocation = offers[0].city.location;
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
      markerGroup.clearLayers();
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id !== selectedOffers
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });
      return () => {
        map.removeLayer(markerGroup);
      };

    }
  }, [map, offers, selectedOffers, cityLocation]);


  return (
    <section className={`${className } map`} ref={mapRef}></section>
  );
}

export default Map;
