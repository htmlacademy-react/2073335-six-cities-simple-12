import HeaderElement from '../../components/header-element/header-element';
import { ListOffers } from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import SortingOption from '../../components/sorting-option/sorting-option';
import { useAppSelector } from '../../hooks';
import LocationsList from '../../components/locations-list/locations-list';
import MainEmpty from '../../components/main-empty/main-empty';


function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.selectedCity);
  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const offers = useAppSelector((state) => state.offers);

  return (
    <><HeaderElement />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          { filteredOffers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} places to stay in {selectedCity}</b>
                <SortingOption />
                <ListOffers className={'cities__places-list tabs__content'} cardClassName={'cities'} filteredOffers={filteredOffers}/>
              </section>
              <div className="cities__right-section">
                <Map className={'cities__map'} style={{ height: '770px' }} offers={offers} />
              </div>
            </div>
            : <MainEmpty/>}
        </div>

      </main>
    </>
  );
}

export default MainPage;
