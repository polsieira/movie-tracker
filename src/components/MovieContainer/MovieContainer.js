import React from 'react';
import './MovieContainer.scss';
import MovieCard from '../MovieCard/MovieCard';
import NavigationBar from '../NavigationBar/NavigationBar';
import { connect } from 'react-redux';

const MovieContainer = ({ movies }) => {
  console.log(movies)
  const displayMovies = movies.map(movie => {
    console.log(movie)
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
      <div className='MovieContainer'>
        {displayMovies}
      </div>
    </>
  )

}

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MovieContainer);
