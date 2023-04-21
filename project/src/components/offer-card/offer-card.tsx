import { Offer } from '../../types/offer';
import { Link, useNavigate } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { selectOffer } from '../../store/action';

type OfferCardProps = {
  offer: Offer;
  cardClassName: string;
}

function OfferCard({offer: {isPremium, type, price, title, id, images, rating}, cardClassName}: OfferCardProps): JSX.Element {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleNavigateClick: MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    navigate(`/offer/${id}`, { state: { from: 'OfferCard' } });
  };

  return (
    <Link to="#" onClick={handleNavigateClick}>
      <article className={`${cardClassName}__card place-card`} onMouseEnter={() => dispatch(selectOffer(id))} onMouseLeave={() => dispatch(selectOffer(null))}>
        { isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : '' }
        <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>

          <img className="place-card__image" src={images[0]} width="260" height="200" alt={title} />

        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width:`${Math.round(rating) * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {title}
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}

export default OfferCard;
