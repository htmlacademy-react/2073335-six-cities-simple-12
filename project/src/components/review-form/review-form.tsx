import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { MAX_TEXT_COMMENT, MIN_TEXT_COMMENT, RATING_GRADE } from '../../constants/const';
import { useAppDispatch } from '../../hooks';
import { sendReviewAction } from '../../store/api-actions';

function ReviewForm({selectedOffer}: {selectedOffer: number}): JSX.Element {
  const dispatch = useAppDispatch();


  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [disable, setDisabled] = useState(false);

  const onFieldChange = ({ target }:ChangeEvent<HTMLTextAreaElement>) => {
    setReview(target.value);
  };

  const clearForm = () => {
    setRating(0);
    setReview('');
    setDisabled(false);
  };

  useEffect(() => {
    setDisabled(!!(review.length > MAX_TEXT_COMMENT || review.length < MIN_TEXT_COMMENT || rating === 0));
  }, [rating, review]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = {
      hotelId: selectedOffer,
      comment: review,
      rating: rating,
    };
    dispatch(sendReviewAction(data));
    clearForm();
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_GRADE.map((title, i, arr) => {
          const count = arr.length - i;
          return (
            <React.Fragment key={`${title}-${count}`}>
              <input
                onChange={() => setRating(count)}
                className="form__rating-input visually-hidden"
                name="rating"
                value={count}
                id={`${count}-stars`}
                type="radio"
                checked={Number(rating) === count}
              />
              <label
                htmlFor={`${count}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea
        onChange={onFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        value={review}
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount"> {MIN_TEXT_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disable} >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
