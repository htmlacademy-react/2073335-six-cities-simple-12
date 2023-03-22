import { Offer } from '../../types/offer';
import CardOffers from '../offer-card/card-offers';
import {useState} from 'react';

type ListOffersProps = {
    rentalOffersOption: Offer[];
}


function ListOffers({rentalOffersOption}: ListOffersProps): JSX.Element {
  const [, setActiveCard] = useState(-1);
  return (
    <div className="cities__places-list places__list tabs__content">
      {rentalOffersOption.map((offer) => (<CardOffers key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}

export {ListOffers};
