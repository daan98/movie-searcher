import React from 'react';
import logo  from "../../img/movie_search.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className='header-contiainer'>
        <img src={logo} alt="project logo" />
        <h1>MoviesDB Search</h1>
    </div>
  );
};

export default Header;