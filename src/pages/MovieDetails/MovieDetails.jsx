import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from '../../services/tmdb-api';

const MovieDetails = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [moviePoster, setMoviePoster] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [movieScore, setMovieScore] = useState('');
  const [movieOverview, setMovieOverview] = useState('');
  const [movieGenres, setMovieGenres] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  //   console.log(backLink);
  //   console.log(movieId);
  useEffect(() => {
    getMovieById(movieId)
      .then(result => {
        const imgUrl = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
        const movieDate = result.release_date.slice(0, 4);
        const score = result.vote_average * 10;
        const genres = result.genres.map(({ name }) => name);

        setMovieTitle(result.title);
        setMoviePoster(imgUrl);
        setReleaseDate(movieDate);
        setMovieScore(score.toFixed(0));
        setMovieOverview(result.overview);
        setMovieGenres(genres.join(' '));
      })
      .catch(() => {
        console.log('Fetch error');
      });
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <div>
        <img src={moviePoster} alt={`${movieTitle} poster`} width="300"></img>
        <h2>
          {movieTitle} ({releaseDate})
        </h2>
        <p>User Score: {movieScore}%</p>
        <h3>Overview</h3>
        <p>{movieOverview}</p>
        <h4>Genres</h4>
        <p>{movieGenres}</p>
      </div>
      <Suspense fallback={<div>Loading additional info...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
