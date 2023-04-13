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

export const BASE_URL = 'https://12.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const TOKEN_HEADER_NAME = 'X-Token';
export const AUTH_TOKEN_LOCAL_STORAGE_KEY_NAME = 'html-academy-794021-six-sities-simple';

