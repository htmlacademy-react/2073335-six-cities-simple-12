import {useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import { sortCards } from '../../utils';
import CardOffers from '../offer-card/offer-card';

type ListOffersProps = {
    cardClassName: string;
    className: string;
    filteredOffers: Offer[];
}

function ListOffers({cardClassName, className, filteredOffers}: ListOffersProps): JSX.Element {
  const selectedSort = useAppSelector((state) => state.sortType);

  const cardsSort = sortCards(filteredOffers, selectedSort);

  return (
    <div className={`${className } places__list`}>
      {cardsSort.map((offer) => (<CardOffers cardClassName={cardClassName} key={offer.id} offer={offer}/>))}
    </div>
  );
}
export {ListOffers};
