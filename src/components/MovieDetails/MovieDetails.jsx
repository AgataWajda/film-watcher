import { getMovieById } from 'API/Api';
import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainConteiner } from './MovieDetails.styled';
import { StyledLink } from './MovieDetails.styled';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);

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

  return (
    <>
      <Link to={from}>Go Back</Link>
      <MainConteiner>
        {movieData.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
            alt={movieData.original_title}
          ></img>
        ) : (
          <></>
        )}
        <div>
          <h2>
            {movieData.original_title} (
            {movieData.release_date ? (
              movieData.release_date.slice(0, 4)
            ) : (
              <></>
            )}
            )
          </h2>
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
                <StyledLink to="cast" state={{ from }}>
                  Cast
                </StyledLink>
              </li>
              <li>
                <StyledLink to="reviews" state={{ from }}>
                  Reviews
                </StyledLink>
              </li>
            </ul>
          </div>
        </div>
      </MainConteiner>
      <Outlet></Outlet>
    </>
  );
};
