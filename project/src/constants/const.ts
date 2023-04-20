
export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer/:id',
    NotFound = '/not_found',
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

export const MAX_COUNT_REVIEWS = 10;
export const MIN_TEXT_COMMENT = 50;
export const MAX_TEXT_COMMENT = 300;
