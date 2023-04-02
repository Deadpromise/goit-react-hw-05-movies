import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieByQuery } from '../../services/tmdb-api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [inputValue, setInputValue] = useState('');
  //   const searchQuery = searchParams.get('query') ?? '';

  const getInputData = e => {
    const inputData = e.currentTarget.value;
    setInputValue(inputData);
    // setSearchParams({ query: inputData });
  };
  const onSearch = e => {
    e.preventDefault();
    setSearchParams({ query: inputValue });
    const searchInfo = searchParams.get('query') ?? '';
    // if (searchInfo.trim() === '') {
    //   alert('Please, enter something.');
    //   return;
    // }
    setSearchQuery(searchInfo);
  };

  useEffect(() => {
    const searchInfo = searchParams.get('query') ?? '';
    setSearchQuery(searchInfo);
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    getMovieByQuery(searchQuery)
      .then(result => {
        setResults(result.results);
      })
      .catch(() => {
        console.log('Fetch error');
      });
    // console.log('log in eff', searchQuery);
  }, [searchQuery]);
  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          onChange={getInputData}
          autoFocus
          placeholder="Search movies"
        ></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Movies.propTypes = {
  searchQuery: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({})),
  searchParams: PropTypes.shape({}),
  location: PropTypes.string,
  inputValue: PropTypes.string,
};
export default Movies;
