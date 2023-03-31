import { Review } from '../../types/review';
import { ReviewsItem } from '../reviews-item/reviews-item';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: ReviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (<ReviewsItem review={review} key={review.id} />))}
    </ul>
  );
}

export {ReviewsList};
