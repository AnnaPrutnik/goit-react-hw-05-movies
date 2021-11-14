import { fetchMovieReviews } from '../../services/searchMovies';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <ul className={s.reviewList}>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li className={s.reviewItem} key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default MovieReviews;
