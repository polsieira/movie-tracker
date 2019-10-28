import './MovieCard.scss';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isFavorite } from '../../actions';

const MovieCard = ({ movie, id, title, release_date, poster_path, overview, isFavorite, movies }) => {

  const d = new Date(`${release_date}`);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return (
    <div className='MovieCard'>
      <Link to={`/movie/${id}`}>
      <img className='movie-poster'src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='movie poster' />
      <div className='movie'>
        <div className='movie-info'>
          <h2 className='movie-title'>{title}</h2>
        
          <h4 className='movie-release'>{date}</h4>
          <h4 className='movie-overview'>{overview}</h4>
        </div>
      </div>
    </Link>
    <button id={id} type='button' className='favorite-btn'><IoIosHeartEmpty className='favorite-heart' onClick={() => {
      movie.isFavorite = !movie.isFavorite;
      isFavorite = movies.filter(movie => movie.isFavorite)
      // console.log(isFavorite)
      // isFavorite('IS_FAVORITE', !movie.isFavorite)
    }}/></button>
    </div>
  )
}

const mapStateToProps = ({ isFavorite, movies }) => ({
  isFavorite,
  movies
})

const mapDispatchToProps = dispatch => ({
  isFavorite: fav => dispatch(fav)
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);