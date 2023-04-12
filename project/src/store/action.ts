import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../constants/const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  UPDATE_OFFERS: 'UPDATE_OFFERS',
  SELECT_OFFER: 'SELECT_OFFER',
  SORT_TYPE: 'SORT_TYPE',
  SET_OFFERS_DATA: 'SET_OFFERS_DATA',
  AUTHORIZATION: 'AUTHORIZATION',
  REDIRECT: 'REDIRECT',
  LOAD_OFFERS: 'LOAD_OFFERS',
  SET_ERROR: 'SET_ERROR',
  LOAD_ID_OFFER: 'LOAD_ID_OFFER',
  LOAD_REVIEW: 'LOAD_REVIEW',
  LOAD_NEAR_OFFERS: 'LOAD_NEAR_OFFERS',
};

export const setCity = createAction<string>(Action.CHANGE_CITY);

export const updateOffers = createAction<{checkCity:string}>(Action.UPDATE_OFFERS);

export const selectOffer = createAction(
  Action.SELECT_OFFER,
  (offerId: number | null) => ({payload: offerId})
);

export const loadOfferById = createAction<Offer>(Action.LOAD_ID_OFFER);

export const loadNearOffers = createAction<Offer>(Action.LOAD_NEAR_OFFERS);

export const loadReviews = createAction<Review>(Action.LOAD_REVIEW);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT);

export const loadOffers = createAction<Offer[]>(Action.LOAD_OFFERS);

export const setSortType = createAction<string>(Action.SORT_TYPE);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SET_OFFERS_DATA);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.AUTHORIZATION);

export const setError = createAction<string | null>(Action.SET_ERROR);
