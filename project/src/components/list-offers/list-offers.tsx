import {useAppSelector } from '../../hooks';
import CardOffers from '../offer-card/card-offers';
import {useState} from 'react';

type ListOffersProps = {
    cardClassName: string;
    className: string;
}


function ListOffers({cardClassName, className}: ListOffersProps): JSX.Element {
  const offers = useAppSelector((state) => state.filteredOffers);

  const [, setActiveCard] = useState(-1);
  return (
    <div className={`${className } places__list`}>
      {offers.map((offer) => (<CardOffers cardClassName={cardClassName} key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}

export {ListOffers};
