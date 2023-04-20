import ReviewForm from '../../components/review-form/review-form';
import { AboutHost } from '../../components/about-host/about-host';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import { ListOffers } from '../../components/list-offers/list-offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../constants/const-api';
import {useParams } from 'react-router-dom';
import { fetchNearPlacesAction, fetchReviewsAction, fetchSelectedOfferAction } from '../../store/api-actions';
import { useEffect } from 'react';
import HeaderElement from '../../components/header-element/header-element';
import LoadingScreen from '../loading-screen/loading-screen';


function PropertyPage(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentOfferId = Number(id);


  const selectedOffer = useAppSelector((state) => state.selectedOffer);
  const reviews = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearOffers);


  useEffect(() => {

    dispatch(fetchSelectedOfferAction(currentOfferId));
    dispatch(fetchNearPlacesAction(currentOfferId));
    dispatch(fetchReviewsAction({id: currentOfferId}));
  }, [dispatch, currentOfferId]);

  if (selectedOffer === null) {
    return <LoadingScreen />;
  }


  const {bedrooms, isPremium, title, rating, price, maxAdults, type, images, goods} = selectedOffer;
  const imagesToRender:string[] = images.slice(0,6);

  const mapOffers = [...nearOffers];
  if (selectedOffer) {
    mapOffers.push(selectedOffer);
  }

  return (
    <>
      <HeaderElement/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                imagesToRender.map((image)=>(
                  <div className="property__image-wrapper" key={Math.random() * 1000}>
                    <img className="property__image" src={image} alt="Pic studio" />
                  </div>
                ))
              };
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                {isPremium && (<span>Premium</span>)}
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
                  {
                    goods.map((good)=>(
                      <li className="property__inside-item" key={Math.random() * 1000}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <AboutHost selectedOffer={selectedOffer} />
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList/>
                { authorizationStatus === AuthorizationStatus.Auth && <ReviewForm selectedOffer={currentOfferId} />}
              </section>
            </div>
          </div>
          <Map className="property__map" style={{ height: '770px' }} offers={mapOffers} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOffers className={'near-places__list'} cardClassName={'near-places'} filteredOffers={nearOffers} />
          </section>
        </div>
      </main>
    </>
  );
}

export default PropertyPage;
