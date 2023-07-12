import React, { useEffect, useState } from 'react';
import { getMovieData, getVideos } from './api';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MovieInfo from './components/MovieInfo/MovieInfo';

const App = () => {
  const [movies, setMovies]             = useState([]);
  const [searchTerm, setSearchTerm]     = useState('');
  const [isSearchDone, setIsSearchDone] = useState(false);

  useEffect(() => {
    const getMovieAPI = async () => {
      setMovies(await getMovieData(searchTerm));
    };

    getMovieAPI();
  }, [searchTerm]);

  return (
    <>
      <Header/>
      <Search setTerm={setSearchTerm} setSearchDone={setIsSearchDone} />
      <MovieInfo movies={movies} searchDone={isSearchDone} searchTerm={searchTerm} />
    </>
  );
}

export default App;