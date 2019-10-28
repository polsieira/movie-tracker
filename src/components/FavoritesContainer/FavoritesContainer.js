import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';
import NavigationBar from '../NavigationBar/NavigationBar';

const MovieContainer = ({ movies, user }) => {
  const favoritedMovies = movies.filter(movie => movie.isFavorite);

  console.log(user)

  const displayMovies = favoritedMovies.map(movie => {
    return (
      <MovieCard
        {...movie}
        key={movie.id}
        id={movie.id}
        movie={movie}
      />
    )
  })

  return (
    <section className='favorites-container'>
      <NavigationBar />
      <div className='favorites'>
        {displayMovies}
      </div>
    </section>
  )
}

const mapStateToProps = ({ movies, user }) => ({
  movies,
  user
})

export default connect(mapStateToProps)(MovieContainer)