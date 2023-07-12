import React from 'react';
import posterNotFound from "../../img/not-found.png";
import { getVideos } from "../../api";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faCircleInfo, faCalendarDays, faFire, faPersonBooth, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons"

import "./MovieInfo.scss";

const MovieInfo = ({ movies, searchDone, searchTerm }) => {

    // let trailer = [];

    const getVideoAPI = async (id) => {
      const result =await getVideos(id);
      return result;
    };

    const onClickWatchTrailer = async (id) => {
          const trailerResult = await getVideoAPI(id);
          
          trailerResult ? window.open(trailerResult, '_blank') : alert('Sorry, trailer not found');
    };

    console.log('MovieInfo movies: ', movies);
    console.log('MovieInfo movies: ', searchDone);

  return (
    <div className='movies-container'>
        {movies.length > 0 ? 
          movies.map(movie => (
            <div key={movie.id} className='single-movie-container'>
                <div className='poster-container'>
                    { movie.posterPath ? 
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} alt="movie poster" />
                        :
                        <img src={posterNotFound} alt="movie poster" />
                    }
                </div>
                
                <div className='info-container'>
                    <h1>{ movie.title }</h1>
                    
                    <p className='description'>{ movie.overview }</p>

                    <div className='secondary-information'>
                        <p title="Release day"><FontAwesomeIcon icon={faCalendarDays} /> <span>{ movie.releaseDate }</span></p>
                        <p title="Popularity"><FontAwesomeIcon icon={faFire} /> <CountUp start={0} end={ movie.popularity } separator=',' /></p>
                        <p title="Vote average"><FontAwesomeIcon icon={faSquarePollVertical} /> <CountUp start={0} end={ movie.voteAverage } separator=',' /></p>
                        <p title="Vote count"><FontAwesomeIcon icon={faPersonBooth} /> <CountUp start={0} end={ movie.voteCount } separator=',' /></p>
                    </div>

                    <div className='buttons-container'>
                        <button title="Whatch trailer" type="button" className='btn' onClick={() => onClickWatchTrailer(movie.id)}><FontAwesomeIcon icon={faFilm} /></button>
                        <a href={`https://www.themoviedb.org/movie/${movie.id}`} target='_blank' title="More details" className='btn'><FontAwesomeIcon icon={faCircleInfo} /></a>
                    </div>
                </div>
            </div>
        ))
        :
        <h1 className='empty-title'>{!searchDone ? "Type a movie to begin..." : `Sorry,  we could not find movies for "${searchTerm}"`}</h1>
        }
    </div>
  );
};

export default MovieInfo;