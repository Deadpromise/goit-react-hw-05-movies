import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTrendingMovie } from '../../services/tmdb-api';

const Home = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  useEffect(() => {
    getTrendingMovie()
      .then(result => {
        setResults(result.results);
      })
      .catch(() => {
        console.log('Fetch error');
      });
  }, []);
  //   console.log(results);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {results.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Home.propTypes = {
  location: PropTypes.shape({}),
  results: PropTypes.arrayOf(PropTypes.shape({})),
};
export default Home;
