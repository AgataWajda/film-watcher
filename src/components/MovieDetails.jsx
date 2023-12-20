import { getMovieById } from 'API/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [userScore, setUserScore] = useState();
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const [releseYear, setReleaseYear] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!title) {
      getMovieById(movieId).then(movie => {
        setTitle(movie.original_title);
        setUserScore(Math.round(movie.vote_average * 10));
        setOverview(movie.overview);
        setGenres(movie.genres.map(genre => genre.name));
        setPoster(`https://image.tmdb.org/t/p/w300${movie.poster_path}`);
        setReleaseYear(movie.release_date.slice(0, 4));
      });
    }
  }, [movieId, userScore, overview, genres, title, poster]);

  return (
    <div>
      <img src={poster} alt={title}></img>
      <h2>
        {title} ({releseYear})
      </h2>
      <p>User Score: {userScore}%</p>
      <div>
        <h3>Overview</h3>
        <span>{overview}</span>
      </div>
      <div>
        <h3>Genres</h3>
        <span>{genres.map(genre => `${genre}, `)}</span>
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
