import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';

const MovieContainer = ({ movies }) => {
  const favoritedMovies = movies.filter(movie => movie.isFavorite);

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
      {displayMovies}
    </section>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps)(MovieContainer)