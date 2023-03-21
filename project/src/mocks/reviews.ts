import { Review } from '../types/review';

const reviews: Review[] = [{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'date': 'Mon Mar 20 2023 14:12:36 GMT+0500',
  'id': 1,
  'rating': 4,
  'user': {
    'avatarUrl': 'img/1.png',
    'id': 1,
    'isPro': false,
    'name': 'Oliver.conner'
  }
},
{
  'comment': 'i love this city',
  'date': 'Mon Mar 21 2023 14:12:36 GMT+0500',
  'id': 2,
  'rating': 5,
  'user': {
    'avatarUrl': 'img/1.png',
    'id': 2,
    'isPro': true,
    'name': 'Oksana.parker'
  }
}];

export {reviews};
