import React from 'react';
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faCircleInfo, faCalendarDays, faFire, faPersonBooth, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"

import "./MovieInfo.scss";

const MovieInfo = ({ title, description, posterPath, releaseDate, popularity, voteAverage, voteCount }) => {
  return (
    <div className='movies-container'>
        <div className='single-movie-container'>
            <div className='poster-container'>
                <img src="https://image.tmdb.org/t/p/w500/j9TIzeMxNknVrBvgxzLqhIhxml4.jpg" alt="Captain marvel" />
            </div>
            
            <div className='info-container'>
                <h1>Pokémon the Movie: Volcanion and the Mechanical Marvel</h1>
                
                <p className='description'>Ash meets the Mythical Pokémon Volcanion when it crashes down from the sky, creating a cloud of dust—and a mysterious force binds the two of them together! Volcanion despises humans and tries to get away, but it's forced to drag Ash along as it continues its rescue mission. They arrive in a city of cogs and gears, where a corrupt official has stolen the ultimate invention: the Artificial Pokémon Magearna, created 500 years ago. He plans to use its mysterious power to take control of this mechanical kingdom! Can Ash and Volcanion work together to rescue Magearna? One of the greatest battles in Pokémon history is about to unfold!</p>

                <div className='secondary-information'>
                    <p title="Release day"><FontAwesomeIcon icon={faCalendarDays} /> <span>2016-07-16</span></p>
                    <p title="Popularity"><FontAwesomeIcon icon={faFire} /> <CountUp start={0} end={24.545} separator=',' /></p>
                    <p title="Vote average"><FontAwesomeIcon icon={faSquarePollVertical} /> <CountUp start={0} end={6.761} separator=',' /></p>
                    <p title="Vote count"><FontAwesomeIcon icon={faPersonBooth} /> <CountUp start={0} end={155} separator=',' /></p>
                </div>

                <div className='buttons-container'>
                    <button title="Whatch trailer" type="button" className='btn'><FontAwesomeIcon icon={faFilm} /></button>
                    <button title="More details" type="button" className='btn'><FontAwesomeIcon icon={faCircleInfo} /></button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MovieInfo;