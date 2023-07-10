import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Search.scss";

const Search = () => {
  return (
    <div className='search-container'>
        <input type="text" name="search-term" placeholder='Type the movie...' className="search-term" />
        <button title="Search" type="button" className='btn'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
};

export default Search;