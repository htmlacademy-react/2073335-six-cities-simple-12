import { MAX_COUNT_REVIEWS } from '../../constants/const';
import { useAppSelector } from '../../hooks';
import {sortReviews} from '../../utils';
import { ReviewsItem } from '../reviews-item/reviews-item';

function ReviewsList(): JSX.Element {
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <ul className="reviews__list">
      {sortReviews(reviews).slice(0, MAX_COUNT_REVIEWS).map((comment) => (
        <ReviewsItem
          key={comment.id}
          comment={comment.comment}
          date={comment.date}
          id={comment.id}
          rating={comment.rating}
          user={comment.user}
        />
      ))}
    </ul>
  );
}

export {ReviewsList};
