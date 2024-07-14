import { findMovies } from 'API/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  StyledForm,
  StyledFirstFinder,
  StyledLink,
  StyledList,
  StyledInput,
  StyledButton,
  StyledTitle,
} from './Movies.styled';

const Movies = () => {
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
    <StyledForm onSubmit={handleChange}>
      {!query ? (
        <StyledFirstFinder>
          <StyledTitle>Find your movie</StyledTitle>
          <div>
            <StyledInput name="input" defaultValue={query}></StyledInput>
            <StyledButton type="submit">Search</StyledButton>
          </div>
        </StyledFirstFinder>
      ) : (
        <>
          {' '}
          <StyledInput name="input" defaultValue={query}></StyledInput>
          <StyledButton type="submit">Search</StyledButton>
          <StyledList>
            {moviesList.map(movie => (
              <li key={movie.id}>
                <StyledLink to={`/movies/${movie.id}`} state={{ from }}>
                  {movie.title}{' '}
                </StyledLink>
              </li>
            ))}
          </StyledList>
        </>
      )}
    </StyledForm>
  );
};

export default Movies;
