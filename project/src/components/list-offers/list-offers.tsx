import {useAppSelector } from '../../hooks';
import { SortCards } from '../const';
import CardOffers from '../offer-card/offer-card';
import {useState} from 'react';

type ListOffersProps = {
    cardClassName: string;
    className: string;
}


function ListOffers({cardClassName, className}: ListOffersProps): JSX.Element {
  const offers = useAppSelector((state) => state.filteredOffers);
  const selectedSort = useAppSelector((state) => state.sortType);
  const sortCards = SortCards(offers, selectedSort);

  const [, setActiveCard] = useState(-1);
  return (
    <div className={`${className } places__list`}>
      {sortCards.map((offer) => (<CardOffers cardClassName={cardClassName} key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}

export {ListOffers};
