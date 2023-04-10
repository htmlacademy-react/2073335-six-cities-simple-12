import { createReducer } from '@reduxjs/toolkit';
import { rentalOffersOption } from '../mocks/offers';
import { setSortType, selectOffer, setCity, updateOffers } from './action';
import { CITY_NAMES, OFFERS_SORT_OPTIONS } from '../constants/const';

type InitialState = {
  selectedCity: string;
  filteredOffers: typeof rentalOffersOption;
  selectedOfferId: number | null;
  sortType: string;
};

const initialState: InitialState = {
  selectedOfferId: null,
  selectedCity: CITY_NAMES[0],
  filteredOffers: rentalOffersOption.filter(({city}) => city.name === CITY_NAMES[0]),
  sortType: OFFERS_SORT_OPTIONS[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.selectedCity = action.payload;
  });

  builder.addCase(updateOffers, (state) => {
    state.filteredOffers = rentalOffersOption.filter(({city}) => city.name === state.selectedCity);
  });
  builder.addCase(selectOffer, (state, action) => {
    state.selectedOfferId = action.payload;
  });
  builder.addCase(setSortType, (state, action) => {
    state.sortType = action.payload;
  });
});

export {reducer};
