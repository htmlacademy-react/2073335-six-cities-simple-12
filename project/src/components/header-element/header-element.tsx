import LoginUser from '../login-user/login-user';

function HeaderElement(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <LoginUser />
        </div>
      </div>
    </header>
  );
}
export default HeaderElement;

