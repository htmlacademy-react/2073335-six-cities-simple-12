import { Offer } from '../types/offer';

export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer/:id',
  }

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const RATING_GRADE: string[] = ['perfect', 'so good', 'nice', 'bad', 'horrible'];

export const CITY_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const OFFERS_SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

function getSortOffers (a:number, b:number) {
  return (a - b);
}

export function SortCards(filteredOffers: Offer[], sortType: string) {
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
