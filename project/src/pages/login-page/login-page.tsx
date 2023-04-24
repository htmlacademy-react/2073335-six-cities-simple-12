import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/const-api';
import { AppRoute } from '../../constants/const';
import { AuthData } from '../../types/data';
import Logo from '../../components/logo/logo';


function LoginPage(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const selectedCity = useAppSelector((state) => state.selectedCity);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      navigate(AppRoute.Main);
    }
  };

  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <Navigate to={AppRoute.Main} />
    );}

  return (
    <div className="page page--gray page--login">

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={loginRef} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" ref={passwordRef} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Должно содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>{selectedCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}


export default LoginPage;
