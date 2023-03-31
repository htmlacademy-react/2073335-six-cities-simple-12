import { Offer } from '../../types/offer';
import CardOffers from '../offer-card/card-offers';
import {useState} from 'react';
import { AdClasses } from '../const';

type ListOffersProps = {
    rentalOffersOption: Offer[];
    isNearCard: boolean;
}


function ListOffers({rentalOffersOption, isNearCard}: ListOffersProps): JSX.Element {
  const [, setActiveCard] = useState(-1);
  return (
    <div className={isNearCard ? AdClasses.ListOffersNear : AdClasses.ListOffersCard}>
      {rentalOffersOption.map((offer) => (<CardOffers isNearCard={isNearCard} key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}

export {ListOffers};
