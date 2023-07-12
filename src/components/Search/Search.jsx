import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Search.scss";

const Search = ({ setTerm, setSearchDone }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onClickSearchMovies = () => {
    if (searchTerm) {
      setTerm(searchTerm);
      setSearchDone(true);
      setSearchTerm('');
    } else {
      alert('Please type a movie to search.');
    }
  };

  return (
    <div className='search-container'>
        <input type="text" name="search-term" placeholder='Type the movie...' className="search-term" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button title="Search" type="button" className='btn' onClick={() => onClickSearchMovies()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
};

export default Search;