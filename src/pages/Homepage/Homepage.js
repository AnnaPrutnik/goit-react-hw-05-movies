import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchTrending } from '../../services/searchMovies';
import s from './Homepage.module.css';

const Homepage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    searchTrendMovies();
  }, []);

  const searchTrendMovies = async () => {
    const results = await fetchTrending().then(res => res.results);
    setTrendMovies(results);
  };

  return (
    <div className="container">
      <h2 className={s.movieTitle}>Trending Today</h2>
      {trendMovies.length > 0 && <MoviesList moviesList={trendMovies} />}
    </div>
  );
};

export default Homepage;
