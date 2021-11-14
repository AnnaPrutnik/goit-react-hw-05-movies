import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from '../../services/searchMovies';
import s from './MovieDetails.module.css';
import CardMarkup from './CardMarkup';

const activeNavLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? '#7272f8' : '#5757a0',
  };
};

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const toReturn = useRef('');
  toReturn.current = location.state ?? toReturn.current;

  useEffect(() => {
    fetchMovieDetails(movieId).then(res => setMovieDetails(res));
  }, [movieId]);

  const handleClickGoBack = () => {
    navigate(toReturn.current ? toReturn.current : '/');
  };
  return (
    <div className={s.movieDetails}>
      <button type="button" onClick={handleClickGoBack} className={s.btn}>
        Go back
      </button>
      {movieDetails && <CardMarkup movieDetails={movieDetails} />}
      <hr />
      <div className={s.infoWrapper}>
        <p>Additional information</p>
        <ul className={s.InfoList}>
          <li className={s.InfoItem}>
            <NavLink
              to="cast"
              className={s.infoLink}
              style={activeNavLinkStyle}
            >
              Cast
            </NavLink>
          </li>
          <li className={s.InfoItem}>
            <NavLink
              to="reviews"
              className={s.infoLink}
              style={activeNavLinkStyle}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <hr />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
