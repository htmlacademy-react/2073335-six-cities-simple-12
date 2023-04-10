import { Offer } from '../types/offer';

const rentalOffersOption: Offer[] = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 48.862877,
        longitude: 2.335397,
        zoom: 8
      },
      name: 'Paris'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Towels',
      'Fridge',
      'Washing machine',
      'Baby seat',
      'Dishwasher',
      'Cabel TV'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Nataly'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 48.85341,
      longitude: 2.34880,
      zoom: 11,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 110,
    rating: 2.2,
    title: 'Beautiful & luxurious studio at great location1',
    type: 'apartment'
  },

  {
    bedrooms: 3,
    city: {
      location: {

        latitude: 48.862877,
        longitude: 2.335397,
        zoom: 8
      },
      name: 'Paris'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Spain.',
    goods: [
      'Heating',
      'Washing machine',
      'Baby seat',
      'Dishwasher',
      'Cabel TV',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: true,
      name: 'Irene'
    },
    id: 2,
    images: [
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.83341,
      longitude: 2.34880,
      zoom: 11,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 90,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location2',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 53.5753,
        longitude: 10.0153,
        zoom: 11,
      },
      name: 'Hamburg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Italy.',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/2.png',
      id: 4,
      isPro: true,
      name: 'Angelina'
    },
    id: 4,
    images: [
      'img/apartment-02.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 300,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at great location4',
    type: 'flat'
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.85043497487292,
        longitude: 4.354815361863751,
        zoom: 11,
      },
      name: 'Brussels'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
      'Washing machine',
      'Baby seat',
      'Dishwasher',
      'Cabel TV',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 5,
      isPro: true,
      name: 'Irene'
    },
    id: 5,
    images: [
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.5209553943508,
      longitude: 4.72309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 90,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location5',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.9333,
        longitude: 6.95,
        zoom: 10
      },
      name: 'Cologne'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
      'Washing machine',
      'Baby seat',
      'Dishwasher',
      'Cabel TV',
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 6,
      isPro: true,
      name: 'Irene'
    },
    id: 6,
    images: [
      'img/apartment-03.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 90,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location2',
    type: 'apartment'
  },
];


export {rentalOffersOption};
