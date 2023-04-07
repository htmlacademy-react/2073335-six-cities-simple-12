import { createReducer } from '@reduxjs/toolkit';
import { rentalOffersOption } from '../mocks/offers';
import { SortingType, selectOffer, setCity, updateOffers } from './action';
import { CITY_NAMES } from '../components/const';

type InitialState = {
  defaultCity: string;
  filteredOffers: typeof rentalOffersOption;
  selectedOfferId: number | null;
  sortType: string;
};

const initialState: InitialState = {
  selectedOfferId: null,
  defaultCity: CITY_NAMES[0],
  filteredOffers: rentalOffersOption.filter(({city}) => city.name === CITY_NAMES[0]),
  sortType: 'Popular',
};

function getSortOffers (a:number, b:number) {
  return (a - b);
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.defaultCity = action.payload;
  });

  builder.addCase(updateOffers, (state) => {
    state.filteredOffers = rentalOffersOption.filter(({city}) => city.name === state.defaultCity);
  });
  builder.addCase(selectOffer, (state, action) => {
    state.selectedOfferId = action.payload;
  });
  builder.addCase(SortingType, (state, action) => {
    const sortType = action.payload;

    if (sortType === 'Price: low to high') {
      const sortOffers = state.filteredOffers.sort((a, b) => getSortOffers(a.price, b.price));
      state.filteredOffers = sortOffers;
    } else if (sortType === 'Price: high to low') {
      const sortOffers = state.filteredOffers.sort((a, b) => getSortOffers(b.price, a.price));
      state.filteredOffers = sortOffers;
    } else if (sortType === 'Top rated first') {
      const sortOffers = state.filteredOffers.sort((a, b) => getSortOffers(b.rating, a.rating));
      state.filteredOffers = sortOffers;
    } else {
      const sortOffers = state.filteredOffers.sort((a, b) => getSortOffers(a.id, b.id));
      state.filteredOffers = sortOffers;
    }
    state.sortType = sortType;
  });
});

export {reducer};
