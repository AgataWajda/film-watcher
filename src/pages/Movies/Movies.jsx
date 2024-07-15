import { findMovies } from 'API/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  StyledForm,
  StyledFirstFinder,
  StyledInput,
  StyledButton,
  StyledTitle,
  StyledAfterQuerry,
} from './Movies.styled';
import {
  StyledLink,
  StyledLi,
  StyledList,
  StyledImg,
  StyledText,
} from 'pages/Home/Home.styled';

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
          <StyledAfterQuerry>
            <StyledInput name="input" defaultValue={query}></StyledInput>
            <StyledButton type="submit">Search</StyledButton>
          </StyledAfterQuerry>
          <StyledList>
            {moviesList.map(movie => (
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
        </>
      )}
    </StyledForm>
  );
};

export default Movies;
