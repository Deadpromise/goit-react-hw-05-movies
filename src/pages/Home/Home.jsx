import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  console.log(results);
  return (
    <div>
      Homepage
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

export default Home;
