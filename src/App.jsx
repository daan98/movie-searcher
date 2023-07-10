import React, { useEffect, useState } from 'react';
import { getMovieData, getVideo } from './api';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MovieInfo from './components/MovieInfo/MovieInfo';

const App = () => {
  const [movies, setMovies]         = useState([]);
  const [trailer, setTrailer]       = useState('');
  const [searchTerm, setSearchTerm] = useState('marvel');
  const [movieId, setMovieId]       = useState(299537);

  useEffect(() => {
    const getMovieAPI = async () => {
      setMovies(await getMovieData(searchTerm));
    };

    const getVideoAPI = async () => {
      setTrailer(await getVideo(movieId));
    };

    getMovieAPI();
    getVideoAPI();
  }, []);

  return (
    <>
      <Header/>
      <Search/>
      <MovieInfo />
      <img src={movies.results ? `https://image.tmdb.org/t/p/w500${movies.results[2].poster_path}` : null} alt="movie poster" />
    </>
  );
}

export default App;