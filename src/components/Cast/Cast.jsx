import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../services/tmdb-api';

const Cast = () => {
  const [castResults, setCastResults] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getMovieCredits(movieId)
      .then(result => {
        // console.log(result.cast);
        const updatedResults = result.cast.map(
          ({ profile_path, name, character, id }) => {
            return {
              photo: `https://image.tmdb.org/t/p/w500${profile_path}`,
              name,
              character,
              id,
            };
          }
        );
        setCastResults(updatedResults);
      })
      .catch(() => {
        console.log('Fetch error');
      });
  }, [movieId]);
  //   console.log(castResults);
  if (castResults.length === 0) {
    return <div>Sorry, no cast avaliable</div>;
  }
  return (
    <>
      <ul>
        {castResults.map(({ photo, name, character, id }) => {
          return (
            <li key={id}>
              <img src={photo} alt={`${name} portrait`} width="100" />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
Cast.propTypes = {
  castResults: PropTypes.arrayOf(PropTypes.shape({})),
  movieId: PropTypes.string,
};
export default Cast;
