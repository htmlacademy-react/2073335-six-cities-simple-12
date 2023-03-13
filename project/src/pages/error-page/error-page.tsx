import {Link} from 'react-router-dom';

function ErrorPage(): JSX.Element {
  return (
    <div>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
export default ErrorPage;
