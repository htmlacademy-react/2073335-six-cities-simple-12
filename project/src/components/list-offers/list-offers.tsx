import {useAppSelector } from '../../hooks';
import { sortCards } from '../../utils';
import CardOffers from '../offer-card/offer-card';
import {useState} from 'react';

type ListOffersProps = {
    cardClassName: string;
    className: string;
}

function ListOffers({cardClassName, className}: ListOffersProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const selectedSort = useAppSelector((state) => state.sortType);
  const currentLocation = useAppSelector((state) => state.selectedCity);
  const filteredOffers = offers.filter((offer) => offer.city.name === currentLocation);
  const cardsSort = sortCards(filteredOffers, selectedSort);


  const [, setActiveCard] = useState(-1);
  return (
    <div className={`${className } places__list`}>
      {cardsSort.map((offer) => (<CardOffers cardClassName={cardClassName} key={offer.id} offer={offer} setActiveCard={setActiveCard} />))}
    </div>
  );
}
export {ListOffers};
