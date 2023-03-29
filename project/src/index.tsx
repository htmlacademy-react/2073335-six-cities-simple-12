import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITY } from './mocks/city';
import { rentalOffersOption} from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      rentalOffersOption={rentalOffersOption}
      reviews={reviews}
      city={CITY}
    />
  </React.StrictMode>,
);
