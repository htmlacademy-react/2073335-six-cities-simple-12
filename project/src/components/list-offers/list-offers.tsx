import { Offer } from '../../types/offer';
import CardOffers from '../offer-card/offer-card';
import {useState} from 'react';

type ListOffersProps = {
    rentalOffersOption: Offer[];
}


function ListOffers({rentalOffersOption}: ListOffersProps): JSX.Element {
  const [, setActiveCard] = useState<number | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {rentalOffersOption.map((offer) => <CardOffers key={offer.id} rentalOffersOption={offer} setActiveCard={setActiveCard} />)}
    </div>
  );
}

export {ListOffers};
