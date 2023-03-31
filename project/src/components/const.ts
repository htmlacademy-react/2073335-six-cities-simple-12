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

export enum AdClasses {
  NearPlacesCard = 'near-places__card place-card',
  CitiesCard = 'cities__card place-card',
  ImageWrapperNear = 'near-places__image-wrapper place-card__image-wrapper',
  ImageWrapperCities = 'cities__image-wrapper place-card__image-wrapper',
  ListOffersNear = 'near-places__list places__list',
  ListOffersCard = 'cities__places-list places__list tabs__content'
}

