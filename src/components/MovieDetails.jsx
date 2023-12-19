import { getMovieById } from 'API/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [userScore, setUserScore] = useState();
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    if (!title) {
      getMovieById(movieId).then(movie => {
        setTitle(movie.original_title);
        setUserScore(movie.vote_average * 10);
        setOverview(movie.overview);
        setGenres(movie.genres.map(genre => genre.name));
      });
    }
  }, [movieId, userScore, overview, genres, title]);

  return (
    <div>
      <h2>{title}</h2>
      <p>User Score: {userScore}%</p>
      <div>
        <h3>Overview</h3>
        <span>{overview}</span>
      </div>
      <div>
        <h3>Genres</h3>
        <span>{genres.map(genre => genre)}</span>
      </div>
    </div>
  );
};
