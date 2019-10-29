import React from 'react';
import './MovieInfo.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

export const MovieInfo = ({ id, movies }) => {
  const movieId = parseInt(id.id)
  const selectedMovie = movies.find(movie => movie.id === movieId)
  const { title, release_date, vote_average, overview, backdrop_path } = selectedMovie
  const d = new Date(`${release_date}`);
  const date = `${d.getFullYear()}`;
  return (
    <section>
      <div className='movie-info-full'>
        <div className='movie-nav'>
          <Link to='/'>
            <button className='go-home' type='button'>Home</button>
          </Link>
          <Link to='/login'>
            <button className='sign-in-movie' type='button'>Sign In</button>
          </Link>
        </div>
        <figure className='movie-figure'>
          <figcaption>
            <h1 className='movie-info-header'>{`${title}(${date})`}</h1>
            <p className='movie-info-vote'>{vote_average}</p>
          </figcaption>
          <img className='movie-backdrop' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt='movie backdrop' />
        </figure>
        <p className='movie-info-overview'>{overview}</p>
      </div>
    </section>
  )
}

export const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps)(MovieInfo); 

MovieInfo.propTypes = {
  id: PropTypes.number,
  movies: PropTypes.array,
}