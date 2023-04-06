import { createAction } from '@reduxjs/toolkit';
//import { CITIES } from '../components/const';


//export const setCity = createAction<{targetCity: typeof CITIES[number]}>('offer/setCity');
//export const setCity = createAction('setCity', (selectedCity: string) => (
//{
//payload: selectedCity,
// }
//));

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
};

export const setCity = createAction<string>(Action.CHANGE_CITY);

export const updateOffers = createAction('offer/updateOffers');

export const selectOffer = createAction(
  'offer/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
