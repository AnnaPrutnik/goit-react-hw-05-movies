import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from '../../services/searchMovies';
import { useLocation } from 'react-router-dom';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!location.search) {
      return;
    }
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    fetchMovieByQuery(query).then(res => {
      setResults(res.results);
    });
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    fetchMovieByQuery(searchQuery).then(res => {
      setResults(res.results);
    });
  }, [searchQuery]);

  const handleSetSearchQuery = query => {
    setSearchQuery(query);
  };

  return (
    <div className="container">
      <SearchForm onSubmit={handleSetSearchQuery} />
      {results.length > 0 && <MoviesList moviesList={results} />}
    </div>
  );
};

export default MoviesPage;
