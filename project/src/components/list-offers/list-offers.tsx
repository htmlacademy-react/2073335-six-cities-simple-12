import { Offer } from '../../types/offer';
import CardOffers from '../offer-card/card-offers';
import {useState} from 'react';

type ListOffersProps = {
    rentalOffersOption: Offer[];
    cardClassName: string;
    className: string;
}


function ListOffers({rentalOffersOption, cardClassName, className}: ListOffersProps): JSX.Element {
  const [, setActiveCard] = useState(-1);
  return (
    <div className={`${className } places__list`}>
      {rentalOffersOption.map((offer) => (<CardOffers cardClassName={cardClassName} key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}

export {ListOffers};
