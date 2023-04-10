import {Link} from 'react-router-dom';
import { AppRoute } from '../../constants/const';

function ErrorPage(): JSX.Element {
  return (
    <div>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </div>
  );
}
export default ErrorPage;
