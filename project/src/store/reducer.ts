import { createReducer } from '@reduxjs/toolkit';
import { rentalOffersOption } from '../mocks/offers';
import { selectOffer, setCity, updateOffers } from './action';
import { CITY_NAMES } from '../components/const';
//import { Offer } from '../types/Offer';

type InitialState = {
  defaultCity: string;
  filteredOffers: typeof rentalOffersOption;
  selectedOfferId: number | null;
};

const initialState: InitialState = {
  selectedOfferId: null,
  defaultCity: CITY_NAMES[0],
  filteredOffers: rentalOffersOption.filter(({city}) => city.name === CITY_NAMES[0])
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.defaultCity = action.payload;
  });

  builder.addCase(updateOffers, (state) => {
    state.filteredOffers = rentalOffersOption.filter(({city}) => city.name === CITY_NAMES[0]);
  });
  builder.addCase(selectOffer, (state, action) => {
    state.selectedOfferId = action.payload;
  });
});

export {reducer};
