import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

const MovieContainer = ({ movies, error }) => {
  const displayMovies = movies.map(movie => {
    return (
      <MovieCard
        {...movie}
        key={movie.id}
      />
    )
  })

  return (
    <>
      <NavigationBar />
      {error && <p className='errorMsg'>Unable to load movies. We hate movies. Go to IMDB.</p>}
      <div className='MovieContainer'>
        {displayMovies}
      </div>
    </>
  )

}

const mapStateToProps = ({ movies, error }) => ({
  movies: movies,
  error
});

export default connect(mapStateToProps)(MovieContainer);
