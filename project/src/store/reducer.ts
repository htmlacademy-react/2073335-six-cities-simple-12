import { createReducer } from '@reduxjs/toolkit';
import { setSortType, selectOffer, updateOffers, setOffersDataLoadingStatus, requireAuthorization, loadOffers, setError } from './action';
import { AuthorizationStatus, CITY_NAMES, OFFERS_SORT_OPTIONS } from '../constants/const';
import { Offer } from '../types/offer';


type InitialState = {
  selectedCity: string;
  filteredOffers: Offer[];
  selectedOfferId: number | null;
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  offers: Offer[];
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
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateOffers, (state, action) => {
    state.filteredOffers = [].filter(({city}) => city === state.selectedCity);
    state.selectedCity = action.payload;
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
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });

});

export {reducer};
