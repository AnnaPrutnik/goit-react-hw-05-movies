import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchMovieCredits } from '../../services/searchMovies';
import noFoto from '../../images/no-foto.png';
import s from './MovieCast.module.css';

const MovieCast = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(res => setCast(res.cast));
  }, [movieId]);

  return (
    <ul className={s.castList}>
      {cast.map(actor => (
        <li className={s.castItem} key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : noFoto
            }
            alt={actor.name}
            className={s.castImg}
          />
          <div className={s.castWrapper}>
            <p>
              <span className={s.castTitle}>Name:</span> {actor.name}
            </p>
            <p>
              <span className={s.castTitle}>Character: </span>
              {actor.character}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
