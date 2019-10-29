import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { connect } from 'react-redux';

export const MovieContainer = ({ movies, errorMsg, handleFavorite }) => {
  const displayMovies = movies.map(movie => {
    return (
      <MovieCard
        {...movie}
        key={movie.id}
        id={movie.id}
        movie={movie}
        handleFavorite={handleFavorite}
      />
    )
  })

  return (
    <>
      <NavigationBar />
      {errorMsg && <p className='errorMsg'>Unable to load movies. We hate movies. Go to IMDB.</p>}
      <div className='MovieContainer'>
        {displayMovies}
      </div>
    </>
  )

}

export const mapStateToProps = ({ movies, errorMsg }) => ({
  movies,
  errorMsg
});

export default connect(mapStateToProps)(MovieContainer);
