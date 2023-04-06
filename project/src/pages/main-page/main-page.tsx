import HeaderElement from '../../components/header-element/header-element';
import { ListOffers } from '../../components/list-offers/list-offers';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import LocationsList from '../../locations-list/locations-list';
import { CITIES } from '../../mocks/city';


type MainPageProps = {
   selectedCity: string;
  }

function MainPage({selectedCity}: MainPageProps): JSX.Element {
  const currentCity = CITIES.find((cities) => cities.name === selectedCity);
  const offers = useAppSelector((state) => state.filteredOffers);

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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{Object.entries(offers).length} places to stay in {currentCity?.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                                Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <ListOffers className={'cities__places-list tabs__content'} cardClassName={'cities'}/>
            </section>
            <div className="cities__right-section">
              <Map className={'cities__map'}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
