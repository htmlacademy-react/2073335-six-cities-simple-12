export enum APIRoute {
    Offers = '/hotels',
    Comments = '/comments',
    Login = '/login',
    Logout = '/logout',
  }

export const BACKEND_URL = 'https://12.react.pages.academy/six-cities-simple';

export const REQUEST_TIMEOUT = 5000;

export const TIMEOUT_SHOW_ERROR = 2000;

export const TOKEN_HEADER_NAME = 'X-Token';

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
