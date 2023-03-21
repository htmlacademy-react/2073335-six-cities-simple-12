import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { rentalOffersOption} from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  RentOffers: 444,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      rentOffers={Setting.RentOffers}
      rentalOffersOption={rentalOffersOption}
      reviews={reviews}
    />
  </React.StrictMode>,
);
