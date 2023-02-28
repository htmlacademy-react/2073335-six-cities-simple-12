
import WelcomeScreen from '../../pages/main-page/main-page';

type AppScreenProps = {
  rentOffers: number;
}

function App({rentOffers}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen rentOffers={rentOffers}/>
  );
}

export default App;
