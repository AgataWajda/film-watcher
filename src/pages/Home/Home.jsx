import { trendingToday } from 'API/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { StyledConteiner, StyledList, StyledLink } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const from = `${location.pathname}`;

  useEffect(() => {
    if (movies.length === 0) {
      trendingToday()
        .then(response => response.results)
        .then(results => setMovies(results))
        .catch(err => console.error(err));
    }
  }, [movies]);

  return (
    <StyledConteiner>
      <h1>Trending today</h1>
      <StyledList>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from }}>
              {movie.title}
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </StyledConteiner>
  );
};

export default Home;
