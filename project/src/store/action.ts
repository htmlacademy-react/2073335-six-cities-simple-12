import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  UPDATE_OFFERS: 'UPDATE_OFFERS',
  SELECT_OFFER: 'SELECT_OFFER',
  SORT_TYPE: 'SORT_TYPE'
};

export const setCity = createAction<string>(Action.CHANGE_CITY);

export const updateOffers = createAction(Action.UPDATE_OFFERS);

export const selectOffer = createAction(
  Action.SELECT_OFFER,
  (offerId: number | null) => ({payload: offerId})
);

export const SortOffers = createAction<string>(Action.SORT_TYPE);
