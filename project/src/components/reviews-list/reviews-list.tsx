import { Review } from '../../types/review';
import { ReviewsItem } from '../reviews-item/reviews-item';

type PropertyPageProps = {
  reviews: Review[];
}

function ReviewsList({reviews}: PropertyPageProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (<ReviewsItem review={review} key={review.id} />))}
    </ul>
  );
}

export {ReviewsList};
