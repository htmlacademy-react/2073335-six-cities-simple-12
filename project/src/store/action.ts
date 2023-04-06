import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
};

export const setCity = createAction<string>(Action.CHANGE_CITY);

export const updateOffers = createAction('offer/updateOffers');

export const selectOffer = createAction(
  'offer/selectOffer',
  (offerId: number | null) => ({payload: offerId})
);
