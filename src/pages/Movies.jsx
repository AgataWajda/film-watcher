import { findMovies } from 'API/Api';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Movies = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [urlSearchParams, setURLSearchParams] = useSearchParams();

  const query = urlSearchParams.get('query') || '';

  const location = useLocation();
  const from = `${location.pathname}${location.search}`;

  const handleChange = event => {
    event.preventDefault();
    const filter = event.target.elements.input.value;
    setURLSearchParams({ query: filter });
  };

  useEffect(() => {
    findMovies(query).then(response => setMoviesList(response));
  }, [query]);

  return (
    <form onSubmit={handleChange}>
      <input name="input" defaultValue={query}></input>
      <button type="submit">Search</button>
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from }}>
              {movie.title}{' '}
            </Link>
          </li>
        ))}
      </ul>
    </form>
  );
};
