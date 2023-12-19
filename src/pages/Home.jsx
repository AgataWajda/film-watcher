import { trendingToday } from 'API/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      trendingToday()
        .then(response => response.results)
        .then(results => setMovies(results))
        .catch(err => console.error(err));
    }
  }, [movies]);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
