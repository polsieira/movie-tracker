import './MovieCard.scss';
import React from 'react';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeartDislike } from 'react-icons/io'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchAndPostFavorite, fetchAndDeleteFavorite } from '../../actions'
import PropTypes from 'prop-types'

const MovieCard = ({ id, title, release_date, poster_path, overview, vote_average, handleFavorite, checkFavorites, user }) => {
  const d = new Date(`${release_date}`);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  const favoriteBtn = <IoIosHeartEmpty className='favorite-heart' />
  const removeFavoriteBtn = <IoMdHeartDislike className='favorite-heart' />

  const faveHandler = checkFavorites(id) ? removeFavoriteBtn : favoriteBtn
  return (
    <div className='MovieCard'>
      <Link to={`/movie/${id}`} className='MovieCardLink'>
        <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='movie poster' />
        <div className='movie'>
          <div className='movie-info'>
            <h2 className='movie-title'>{title}</h2>
            <h3 className='movie-vote'>{vote_average}</h3>
            <h4 className='movie-release'>{date}</h4>
            <h4 className='movie-overview'>{overview}</h4>
          </div>
        </div>
      </Link>
      {user.isSignedIn ? <button
        id={id}
        type='button'
        className='favorite-btn'
        onClick={() => {
          handleFavorite({
            movie_id: id,
            title: title,
            poster_path: poster_path,
            release_date: release_date,
            vote_average: vote_average,
            overview: overview
          })
        }}
      >{faveHandler}</button> : <Link to='/login'><button
      id={id}
      type='button'
      className='favorite-btn'>{favoriteBtn}</button></Link>}
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

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  handleFavorite: PropTypes.func,
  user: PropTypes.object,
  favorites: PropTypes.array,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func
}