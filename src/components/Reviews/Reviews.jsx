import { getReviews } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // if (reviews.length) {
    getReviews(movieId).then(response => setReviews(response));
    // }
  }, [movieId, reviews]);

  return (
    <>
      {reviews.length === 0 ? (
        <div className={css.info}>We don't Have any reviews to this movie.</div>
      ) : (
        <>
          <h2 className={css.title}>Reviews:</h2>
          <ul className={css.list}>
            {reviews.map(review => (
              <li key={review.id} className={css.item}>
                <h4 className={css.author}>{review.author}</h4>
                <div>{review.content}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Reviews;
