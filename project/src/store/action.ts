import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants/const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AuthorizationStatus } from '../constants/const-api';
import { UserData } from '../types/data';

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
  USER_DATA: 'USER_DATA',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
  LOAD_SELECTED_OFFER: 'LOAD_SELECTED_OFFER',
  SET_COMMENTS: 'SET_COMMENTS'
};

export const updateOffers = createAction<string>(Action.UPDATE_OFFERS);

export const selectOffer = createAction(
  Action.SELECT_OFFER,
  (offerId: number | null) => ({payload: offerId})
);

export const loadOffers = createAction<Offer[]>(Action.LOAD_OFFERS);
export const setSortType = createAction<string>(Action.SORT_TYPE);

export const setOffersDataLoadingStatus = createAction<boolean>(Action.SET_OFFERS_DATA);
export const requireAuthorization = createAction<AuthorizationStatus>(Action.AUTHORIZATION);
export const setError = createAction<string | null>(Action.SET_ERROR);
export const setUserData = createAction<UserData>(Action.USER_DATA);

export const loadNearOffers = createAction<Offer[]>(Action.LOAD_NEAR_OFFERS);
export const loadReviews = createAction<Review[]>(Action.LOAD_REVIEW);
export const loadSelectedOffer = createAction<Offer>(Action.LOAD_SELECTED_OFFER);


export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT);
