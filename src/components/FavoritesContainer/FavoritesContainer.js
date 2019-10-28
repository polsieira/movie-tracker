import React from 'react';
// import MovieCard from '../MovieCard';
import { connect } from 'react-redux';
import './FavoritesContainer.scss';

const MovieContainer = () => {
  console.log(this.props)
  
  return (
    <section className='favorites-container'>

    </section>
  )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps)(MovieContainer)