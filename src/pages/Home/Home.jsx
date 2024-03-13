import { trendingToday } from 'API/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  StyledConteiner,
  StyledImg,
  StyledLi,
  StyledList,
  StyledLink,
  StyledText,
  StyledTitle,
} from './Home.styled';

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
      <StyledTitle>Trending today</StyledTitle>
      <StyledList>
        {movies.map(movie => (
          <StyledLi key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from }}>
              {movie.poster_path ? (
                <StyledImg
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                ></StyledImg>
              ) : (
                <></>
              )}
              <StyledText>{movie.title}</StyledText>
            </StyledLink>
          </StyledLi>
        ))}
      </StyledList>
    </StyledConteiner>
  );
};

export default Home;
