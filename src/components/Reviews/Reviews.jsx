import { getReviews } from 'API/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>We don't Have any reviews to this movie.</div>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <div>{review.content}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
