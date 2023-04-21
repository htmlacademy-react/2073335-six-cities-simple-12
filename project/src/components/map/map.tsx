import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect} from 'react';
import { Icon, Marker} from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';

type StyleMap = {
  height: string;
}

type MapProps = {
className: string;
style: StyleMap;
offers: Offer[];
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


function Map({className, style, offers}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const selectedOfferId = useAppSelector((state) => state.selectedOfferId);
  const selectedOffer = useAppSelector((state) => state.selectedOffer);


  const cityLocation = filteredOffers[0].city.location;
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = cityLocation;
      map.flyTo([latitude, longitude], zoom);
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map && offers) {
      const markerGroup = leaflet.layerGroup().addTo(map);
      markerGroup.clearLayers();
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        if (className === 'property__map') {
          marker
            .setIcon(
              selectedOffer?.id === offer.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerGroup);
        } else {
          marker
            .setIcon(
              selectedOfferId === offer.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(markerGroup);
        }
      });
      return () => {
        map.removeLayer(markerGroup);
      };

    }
  }, [map, offers, selectedOfferId, cityLocation, selectedOffer, className]);


  return (
    <section className={`${className } map`} ref={mapRef} style={style}></section>
  );
}

export default Map;
