import './MovieCard.scss';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';

const MovieCard = ({ id, title, release_date, poster_path, backdrop_path }) => {

  const d = new Date(`${release_date}`);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

  return (
    <div className='MovieCard'>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='movie poster' />
      <div className='movie'>
        <div className='movie-info'>
          <h2 className='movie-title'>{title}</h2>
          <h4 className='movie-release'>{date}</h4>
        </div>
        <button id={id} type='button' className='favorite-btn'><IoIosHeartEmpty className='favorite-heart' /></button>
      </div>
    </div>
  )
}

export default MovieCard;