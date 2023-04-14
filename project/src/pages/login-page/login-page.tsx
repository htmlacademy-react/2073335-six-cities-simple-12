import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthData } from '../../constants/const-api';
import { AuthorizationStatus } from '../../constants/const-api';
import { AppRoute } from '../../constants/const';
import HeaderElement from '../../components/header-element/header-element';


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

  return (
    authStatus === AuthorizationStatus.Auth ? <Navigate to={AppRoute.Main} /> :
      (
        <>
          <HeaderElement />
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
                  <a className="locations__item-link" href="/#">
                    <span>{selectedCity}</span>
                  </a>
                </div>
              </section>
            </div>
          </main>
        </>
      )
  );
}

export default LoginPage;
