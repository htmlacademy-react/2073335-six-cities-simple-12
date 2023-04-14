import { createReducer } from '@reduxjs/toolkit';
import { setSortType, selectOffer, updateOffers, setOffersDataLoadingStatus, requireAuthorization, loadOffers, setError, setUserData, updateLogin } from './action';
import { CITY_NAMES, OFFERS_SORT_OPTIONS } from '../constants/const';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../constants/const-api';
import { UserData } from '../types/data';

type InitialState = {
  selectedCity: string;
  filteredOffers: Offer[];
  selectedOfferId: number | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  offers: Offer[];
  userData: UserData | null;
  login: string | null;
};

const initialState: InitialState = {
  selectedOfferId: null,
  selectedCity: CITY_NAMES[0],
  sortType: OFFERS_SORT_OPTIONS[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  offers: [],
  filteredOffers: [],
  userData: null,
  login: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateOffers, (state, action) => {
    state.selectedCity = action.payload;
    state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
  });
  builder.addCase(selectOffer, (state, action) => {
    state.selectedOfferId = action.payload;
  });
  builder.addCase(setSortType, (state, action) => {
    state.sortType = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.filteredOffers = state.offers.filter((offer) => offer.city.name === state.selectedCity);
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
  builder.addCase(updateLogin, (state, action) => {
    state.login = action.payload;
  });


});

export {reducer};
