import { createReducer } from '@reduxjs/toolkit';
import { setSortType, selectOffer, updateOffers, setOffersDataLoadingStatus, requireAuthorization, loadOffers, setError, setUserData, loadNearOffers, loadSelectedOffer, loadReviews } from './action';
import { cityNames, sortOptions} from '../constants/const';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../constants/const-api';
import { UserData } from '../types/data';
import { Review } from '../types/review';

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
  nearOffers: Offer[];
  selectedOffer: Offer | null;
  reviews: Review[];
};

const initialState: InitialState = {
  selectedOfferId: null,
  selectedCity: cityNames[0],
  sortType: sortOptions[0],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  offers: [],
  filteredOffers: [],
  userData: null,
  nearOffers: [],
  selectedOffer: null,
  reviews: [],
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
  builder.addCase(loadNearOffers, (state, action) => {
    state.nearOffers = action.payload;
  });
  builder.addCase(loadSelectedOffer, (state, action) => {
    state.selectedOffer = action.payload;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
  });
});

export {reducer};
