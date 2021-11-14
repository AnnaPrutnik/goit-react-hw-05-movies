import axios from 'axios';

async function fetchFunction(endPoint, params) {
  const API_KEY = 'd4f3390d5c2a8eb167e02bde63d97d8d';
  axios.defaults.baseURL = 'https://api.themoviedb.org/3';

  const results = await axios.get(`/${endPoint}?api_key=${API_KEY}&${params}`);

  return results.status === 200
    ? results.data
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  const params = '';
  return fetchFunction('trending/all/day', params);
}

export function fetchMovieByQuery(query) {
  const params = `query=${query}`;
  return fetchFunction('search/movie', params);
}

export function fetchMovieDetails(movieId) {
  const results = fetchFunction(`movie/${movieId}`, '').catch(err => {
    if (err.response.status === 404) {
      return fetchFunction(`tv/${movieId}`, '');
    }
  });

  return results;
}

export function fetchMovieCredits(movieId) {
  const results = fetchFunction(`movie/${movieId}/credits`, '').catch(err => {
    if (err.response.status === 404) {
      return fetchFunction(`tv/${movieId}/credits`, '');
    }
  });

  return results;
}

export function fetchMovieReviews(movieId) {
  const results = fetchFunction(`movie/${movieId}/reviews`, '').catch(err => {
    if (err.response.status === 404) {
      return fetchFunction(`tv/${movieId}/reviews`, '');
    }
  });
  return results;
}
