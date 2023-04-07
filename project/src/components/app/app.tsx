import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ErrorPage from '../../pages/error-page/error-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import PropertyPage from '../../pages/property-page/property-page';
import { Review } from '../../types/review';
import { AppRoute } from '../const';

type AppScreenProps = {
  reviews: Review[];
}

function App({reviews}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={ <MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <PropertyPage
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
