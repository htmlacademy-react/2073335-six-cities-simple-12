import ReviewForm from '../../components/review-form/review-form';
import { AboutHost } from '../../components/about-host/about-host';
import { Navigate, useParams } from 'react-router-dom';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { ListOffers } from '../../components/list-offers/list-offers';
import { Review } from '../../types/review';
import { useAppSelector } from '../../hooks';


type PropertyPageProps = {
  reviews: Review[];
}

function PropertyPage({reviews}: PropertyPageProps): JSX.Element {
  const {id} = useParams() as {id: string};
  const offers = useAppSelector((state) => state.filteredOffers);
  const offer = offers.find((o) => o.id === parseInt(id, 10));

  if (!offer) {
    return <Navigate to="*"/>;
  }
  const {
    type,
    title,
    rating,
    bedrooms,
    maxAdults,
    price,
    host,
    description
  } = offer;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio"/>
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio"/>
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>Premium</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                Wi-Fi
                </li>
                <li className="property__inside-item">
                Washing machine
                </li>
                <li className="property__inside-item">
                Towels
                </li>
                <li className="property__inside-item">
                Heating
                </li>
                <li className="property__inside-item">
                Coffee machine
                </li>
                <li className="property__inside-item">
                Baby seat
                </li>
                <li className="property__inside-item">
                Kitchen
                </li>
                <li className="property__inside-item">
                Dishwasher
                </li>
                <li className="property__inside-item">
                Cabel TV
                </li>
                <li className="property__inside-item">
                Fridge
                </li>
              </ul>
            </div>
            <AboutHost host={host} description={description} />
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
              <ReviewsList reviews={reviews} />
              <ReviewForm />
            </section>
          </div>
        </div>
        <Map className="property__map"/>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <ListOffers className={'near-places__list'} cardClassName={'near-places'} />
        </section>
      </div>
    </main>
  );
}

export default PropertyPage;
