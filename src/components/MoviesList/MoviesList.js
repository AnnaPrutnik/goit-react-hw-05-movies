import PropTypes from 'prop-types';
import { Link, Outlet, useLocation } from 'react-router-dom';

import s from './MovieList.module.css';

function MoviesList(moviesList) {
  const movies = moviesList.moviesList;
  const location = useLocation();

  return (
    <div className={s.container}>
      <ul className={s.movieList}>
        {movies.map(movie => (
          <li className={s.movieItem} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              className={s.movieLink}
              state={location}
            >
              {movie.title ?? movie.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default MoviesList;

MoviesList.propTypes = {
  moviesList: PropTypes.object,
};
