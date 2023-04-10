import { OFFERS_SORT_OPTIONS } from '../constants/const';
import { Offer } from '../types/offer';

function getSortOffers (a:number, b:number) {
  return (a - b);
}

export function sortCards(filteredOffers: Offer[], sortType: string) {
  const current = [...filteredOffers];
  if (sortType === OFFERS_SORT_OPTIONS[1]) {
    return current.sort((a, b) => getSortOffers(a.price, b.price));
  } else if (sortType === OFFERS_SORT_OPTIONS[2]) {
    return current.sort((a, b) => getSortOffers(b.price, a.price));
  } else if (sortType === OFFERS_SORT_OPTIONS[3]) {
    return current.sort((a, b) => getSortOffers(b.rating, a.rating));
  } else {
    return current.sort((a, b) => getSortOffers(a.id, b.id));
  }
}

