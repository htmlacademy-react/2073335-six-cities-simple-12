import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';


type OfferCardProps = {
  offer: Offer;
  setActiveCard: (id: number) => void;
}

function CardOffers({offer: {isPremium, type, price, title, id, images}, setActiveCard}: OfferCardProps): JSX.Element {


  return (
    <Link to={`offer/${id}`}>
      <article className="cities__card place-card" onMouseEnter={() => setActiveCard(id)} onMouseLeave={() => setActiveCard(-1)}>
        { isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          : '' }
        <div className="cities__image-wrapper place-card__image-wrapper">

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
              <span style={{ width: '80%' }}></span>
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

export default CardOffers;
