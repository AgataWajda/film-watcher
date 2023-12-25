import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { MainConteiner } from './MainConteiner/MainConteiner';
const Home = lazy(() => import('../pages/Home/Home'));

const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainConteiner />}>
        <Route index element={<Home />} />
        <Route path="goit-react-hw-05-movies" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
