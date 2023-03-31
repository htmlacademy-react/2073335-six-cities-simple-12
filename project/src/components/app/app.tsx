import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ErrorPage from '../../pages/error-page/error-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import { City, Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { AppRoute } from '../const';


type AppScreenProps = {
  rentalOffersOption: Offer[];
  reviews: Review[];
  city: City;
}

function App({rentalOffersOption, reviews, city}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={ <MainPage rentalOffersOption={rentalOffersOption} city={city}/>}
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
              city={city}
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
