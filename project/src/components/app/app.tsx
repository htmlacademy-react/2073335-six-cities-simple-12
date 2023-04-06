import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ErrorPage from '../../pages/error-page/error-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { AppRoute } from '../const';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  rentalOffersOption: Offer[];
  reviews: Review[];
}

function App({rentalOffersOption, reviews}: AppScreenProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.defaultCity);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={ <MainPage rentalOffersOption={rentalOffersOption} selectedCity={currentCity} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <PropertyPage
              rentalOffersOption={rentalOffersOption}
              reviews={reviews}
            />
          }
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
