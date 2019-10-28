import './MovieCard.scss';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// import { postFavorite } from '../../apiCalls'
import { fetchAndPostFavorite, fetchAndDeleteFavorite } from '../../actions'

const MovieCard = ({ id, title, release_date, poster_path, overview, vote_average, movie, handleFavorite }) => {
  const d = new Date(`${release_date}`);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  return (
    <div className='MovieCard'>
      <Link to={`/movie/${id}`}>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='movie poster' />
        <div className='movie'>
          <div className='movie-info'>
            <h2 className='movie-title'>{title}</h2>
            <h3 className='movie-vote'>{vote_average}</h3>
            <h4 className='movie-release'>{date}</h4>
            <h4 className='movie-overview'>{overview}</h4>
          </div>
          <button
            id={id}
            type='button'
            className='favorite-btn'
            onClick={() => {
              console.log('clicked')
              handleFavorite({
                movie_id: id,
                title: title,
                poster_path: poster_path,
                release_date: release_date,
                vote_average: vote_average,
                overview: overview
              })
            }}
          ><IoIosHeartEmpty className='favorite-heart' /></button>
        </div>
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  favorites: state.favorites
})



const mapDispatchToProps = dispatch => ({
  addFavorite: (id, favorite) => dispatch(fetchAndPostFavorite(id, favorite)),
  removeFavorite: (userId, movieId) => dispatch(fetchAndDeleteFavorite(userId, movieId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);