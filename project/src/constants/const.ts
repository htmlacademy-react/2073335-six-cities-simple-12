
export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer/:id',
    NotFound = '/not_found',
  }

export const RATING_GRADES: string[] = ['perfect', 'so good', 'nice', 'bad', 'horrible'];

export const CITY_NAMES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const MAX_COUNT_REVIEWS = 10;
export const MIN_TEXT_COMMENT = 50;
export const MAX_TEXT_COMMENT = 300;
