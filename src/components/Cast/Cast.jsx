import { getCast } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieStarImage from './movie-star-1027360_1280.jpg';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (cast.length === 0) {
      getCast(movieId).then(response => setCast(response));
    }
  }, [movieId, cast]);

  return (
    <>
      <h2 className={css.title}>Cast:</h2>
      <ul className={css.list}>
        {cast.map(actor => (
          <li className={css.item} key={actor.id}>
            {actor.profile_path ? (
              <img
                className={css.photo}
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <img
                className={css.photo}
                src={movieStarImage}
                alt={actor.name}
              />
            )}
            <div className={css.description}>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
