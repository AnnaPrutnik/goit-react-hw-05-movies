import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Homepage = lazy(() =>
  import('../../pages/Homepage/Homepage' /* webpackChunkName: 'HomePage'*/),
);
const MoviesPage = lazy(() =>
  import('../../pages/Movies/MoviesPage' /* webpackChunkName: 'MoviesPage'*/),
);
const MovieDetails = lazy(() =>
  import('../MovieCard/MovieDetails' /* webpackChunkName: 'MovieDetails'*/),
);
const MovieCast = lazy(() =>
  import('../MovieCast/MovieCast' /* webpackChunkName: 'MovieCast'*/),
);
const MovieReviews = lazy(() =>
  import('../MovieReviews/MovieReviews' /* webpackChunkName: 'MovieReviews'*/),
);

const RoutesApp = () => {
  return (
    <>
      <Suspense fallback={<h1>Waiting...</h1>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Routes>
      </Suspense>
      <Outlet />
    </>
  );
};

export default RoutesApp;
