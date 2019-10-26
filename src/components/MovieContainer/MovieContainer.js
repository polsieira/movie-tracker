import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { connect } from 'react-redux';

const MovieContainer = ({ movies, errorMsg }) => {
  const displayMovies = movies.map(movie => {
    console.log(movie)
    return (
      <MovieCard
        {...movie}
        key={movie.id}
        id={movie.id}
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

const mapStateToProps = ({ movies, errorMsg }) => ({
  movies,
  errorMsg
});

//this was just { error } but in the store it's called errorMsg?? 

export default connect(mapStateToProps)(MovieContainer);
