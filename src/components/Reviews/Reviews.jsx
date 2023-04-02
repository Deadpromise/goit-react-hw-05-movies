import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../services/tmdb-api';

const Reviews = () => {
  const [reviewsResults, setReviewsResults] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(result => {
        setReviewsResults(result.results);
      })
      .catch(() => {
        console.log('Fetch error');
      });
  }, [movieId]);
  console.log(reviewsResults);
  if (reviewsResults.length === 0) {
    return <div>We don`t have any reviews for this movie.</div>;
  }
  return (
    <ul>
      {reviewsResults.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
Reviews.propTypes = {
  reviewsResults: PropTypes.arrayOf(PropTypes.shape({})),
  movieId: PropTypes.string,
};
export default Reviews;
