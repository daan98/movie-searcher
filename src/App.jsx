import React, { useEffect, useState } from 'react';
import { getMovieData, getVideos } from './api';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MovieInfo from './components/MovieInfo/MovieInfo';

const App = () => {
  const [movies, setMovies]             = useState([]);
  const [searchTerm, setSearchTerm]     = useState('');
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [loading, setLoading]           = useState(false);

  useEffect(() => {
    const getMovieAPI = async () => {
      setLoading(true);
      setMovies(await getMovieData(searchTerm));
      setLoading(false);
    };

    getMovieAPI();
  }, [searchTerm]);

  return (
    <>
      <Header/>
      <Search setTerm={setSearchTerm} setSearchDone={setIsSearchDone} />
      <MovieInfo movies={movies} searchDone={isSearchDone} searchTerm={searchTerm} isLoading={loading} />
    </>
  );
}

export default App;