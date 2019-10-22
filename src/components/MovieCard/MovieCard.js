import './MovieCard.scss';
import React from 'react';

const MovieCard = ({ title, release_date, poster_path }) => {
  return (
    <div className='MovieCard'>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='movie poster' />
      <h2 className='movie-title'>{title}</h2>
    </div>
  )
}

export default MovieCard;