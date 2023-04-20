import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../constants/const-api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute } from '../../constants/const';
import { logoutAction } from '../../store/api-actions';

function LoginUser(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.userData);

  const dispatch = useAppDispatch();
  const handleSignOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth
          ? (
            <>
              <li className="header__nav-item user">
                <div className="header__nav-profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    <img src={userData?.avatarUrl} alt={userData?.name} />
                  </div>
                  <span className="header__user-name user__name">{userData?.email}</span>
                </div>
              </li>
              <li className="header__nav-item">
                <Link className="header__nav-link" to={''} onClick={handleSignOut}>
                  <span className="header__signout"> Sign out </span>
                </Link>
              </li>
            </>
          ) : (
            <li className="header__nav-item user">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <Link to={AppRoute.Login}>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          )}
      </ul>
    </nav>
  );
}
export default LoginUser;
