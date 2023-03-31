import { Offer } from '../../types/offer';
import CardOffers from '../offer-card/card-offers';
import {useState} from 'react';

type ListOffersProps = {
    rentalOffersOption: Offer[];
    isNearCard: boolean;
    className: string;
}


function ListOffers({rentalOffersOption, isNearCard, className}: ListOffersProps): JSX.Element {
  const [, setActiveCard] = useState(-1);
  return (
    <div className={className}>
      {rentalOffersOption.map((offer) => (<CardOffers isNearCard={isNearCard} key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}

export {ListOffers};
