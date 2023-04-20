import { OFFERS_SORT_OPTIONS } from '../constants/const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
function getSortOffers (a:number, b:number) {
  return (a - b);
}

export function sortCards(filteredOffers: Offer[], sortType: string) {
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


export function ProcessDate (review:Review) {
  const reviewDate = new Date(review.date);
  const monthName = reviewDate.toLocaleString('en-EN', { month: 'long' });
  const reviewTime = `${monthName} ${reviewDate.getFullYear()}`;
  const reviewDateTime = review.date.substring(0, 10);

  return [reviewTime, reviewDateTime];
}

function ReviewsSort(reviews: Review[]) {
  const items = [...reviews];
  items.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  return items;
}

export default ReviewsSort;
