
import WelcomeScreen from '../../pages/main-page/main-page';

type AppScreenProps = {
  RentOffers: number;
}

function App({RentOffers}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen rentOffers={RentOffers}/>
  );
}

export default App;
