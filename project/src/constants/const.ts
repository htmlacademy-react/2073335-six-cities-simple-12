import { Offer } from '../types/offer';

export enum AppRoute {
    Login = '/login',
    Main = '/',
    Room = '/offer/:id',
    NotFound = '*',
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

export const UNKNOWN_OFFER:Offer = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    name: ''
  },
  description: '',
  goods: [
    ''
  ],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: ''
  },
  id: 0,
  images: [
    ''
  ],
  isFavorite: false,
  isPremium: false,
  location: {
    latitude: 0,
    longitude:0,
    zoom: 0
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: ''
};

export const MAX_COUNT_REVIEWS = 10;
export const MIN_TEXT_COMMENT = 50;
export const MAX_TEXT_COMMENT = 300;
