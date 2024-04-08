import { getMovieById } from 'API/Api';
import { useParams, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { MainConteiner, Conteiner } from './MovieDetails.styled';
import {
  StyledLink,
  StyledGoBack,
  StyledImg,
  StyledMovieTitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  const myRef = useRef(null);
  const { movieId } = useParams();

  const location = useLocation();
  const from = location.state?.from ?? '/home';

  useEffect(() => {
    if (movieData.length === 0) {
      getMovieById(movieId).then(movie => {
        setMovieData(movie);
      });
    }
  }, [movieId, movieData]);

  const scrollToRef = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Conteiner>
      <StyledGoBack to={from}>&#9664; Go Back </StyledGoBack>
      <MainConteiner>
        {movieData.poster_path ? (
          <StyledImg
            src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
            alt={movieData.original_title}
          ></StyledImg>
        ) : (
          <></>
        )}
        <div>
          <StyledMovieTitle>
            {movieData.original_title} (
            {movieData.release_date ? (
              movieData.release_date.slice(0, 4)
            ) : (
              <></>
            )}
            )
          </StyledMovieTitle>
          <p>User Score: {Math.round(movieData.vote_average * 10)}%</p>
          <div>
            <h3>Overview</h3>
            <span>{movieData.overview}</span>
          </div>
          <div>
            <h3>Genres</h3>
            <span>
              {movieData.genres ? (
                movieData.genres.map(genre => genre.name).join(', ')
              ) : (
                <></>
              )}
            </span>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <StyledLink to="cast" state={{ from }} onClick={scrollToRef}>
                  Cast
                </StyledLink>
              </li>
              <li>
                <StyledLink to="reviews" state={{ from }} onClick={scrollToRef}>
                  Reviews
                </StyledLink>
              </li>
            </ul>
          </div>
        </div>
      </MainConteiner>
      <Suspense fallback={<div>Loading</div>}>
        <div ref={myRef}></div>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};

export default MovieDetails;
