import {Link} from 'react-router-dom';
import { AppRoute } from '../../constants/const';

function NotFound(): JSX.Element {
  return (
    <div>
      <h1>Ошибка 404. Такой страницы не существует.</h1>
      <Link to={AppRoute.Main}>Вернуться на главную</Link>
    </div>
  );
}
export default NotFound;
