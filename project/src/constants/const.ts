
export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer/:id',
    NotFound = '/not_found',
  }

export const ratingGrades: string[] = ['perfect', 'so good', 'nice', 'bad', 'horrible'];

export const cityNames = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export const sortOptions = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export const MAX_COUNT_REVIEWS = 10;
export const MIN_TEXT_COMMENT = 50;
export const MAX_TEXT_COMMENT = 300;
