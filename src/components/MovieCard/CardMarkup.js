import noPoster from '../../images/no-poster.webp';
import PropTypes from 'prop-types';
import s from './MovieDetails.module.css';

const CardMarkup = movieDetails => {
  const movie = movieDetails.movieDetails;
  const year =
    movie.release_date?.slice(0, 4) ?? movie.first_air_date.slice(0, 4);

  return (
    <div className={s.movieCard}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : noPoster
        }
        alt={`${movie.title} poster`}
        className={s.cardPoster}
      />
      <div className={s.cardInfo}>
        <h2>
          {movie.title ?? movie.name} ({year})
        </h2>
        <p>User Score: {movie.vote_average * 10}%</p>
        <h3>Overview: </h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <ul className={s.genreList}>
          {movie.genres.map(genre => (
            <li className={s.genreItem}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CardMarkup.propTypes = {
  movieDetails: PropTypes.object,
};

export default CardMarkup;
