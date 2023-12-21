import { getMovieById } from 'API/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieData.length === 0) {
      getMovieById(movieId).then(movie => {
        setMovieData(movie);
      });
    }
  }, [movieId, movieData]);

  //{movieData.genres.map(genre => genre.name).map(genre => `${genre}, `)}

  return (
    <div>
      {movieData.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
          alt={movieData.original_title}
        ></img>
      ) : (
        <></>
      )}
      <h2>
        {movieData.original_title} (
        {movieData.release_date ? movieData.release_date.slice(0, 4) : <></>})
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
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
