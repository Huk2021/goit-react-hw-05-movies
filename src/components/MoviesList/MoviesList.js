import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieList({ list }) {
  const location = useLocation();

  return (
    <ul >
      {list !== [] &&
        list.map(movie => (
          <li  key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.name ? movie.name : movie.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

