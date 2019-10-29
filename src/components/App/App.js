import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../apiCalls';
import './App.scss';
import { addMovies, checkIsLoading, hasErrored, fetchAndDeleteFavorite, fetchAndPostFavorite, getFavorites } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieInfo from '../MovieInfo/MovieInfo';
import LoginForm from '../LoginForm/Form';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import PropTypes from 'prop-types'

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    const { addMovies, isLoading, hasErrored } = this.props;
    try {
      checkIsLoading(true);
      const movieData = await getMovies();
      checkIsLoading(false);
      addMovies(movieData);
    } catch (error) {
      checkIsLoading(false);
      hasErrored(error.message);
    }
  }

  handleFavorite = (movie) => {
    const { favorites, user, fetchAndPostFavorite, fetchAndDeleteFavorite, getFavorites } = this.props;
    if (user.id) {
      const isFavorited = favorites.find(favorite => {
        return favorite.movie_id === movie.movie_id
      });
      if (isFavorited) {
        fetchAndDeleteFavorite(user.id, movie.movie_id)
      } else {
        fetchAndPostFavorite(user.id, movie)
      }
    } else {
      //some kind of bool that redirects
    }
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={() => <MovieContainer handleFavorite={this.handleFavorite} />} />
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/movie/:id' render={({match}) => <MovieInfo id={match.params} />} />
        <Route exact path='/favorites' render={() => <FavoritesContainer />}/>
      </div>
    )
  }
}

const mapStateToProps = ({ movies, errorMsg, isLoading, user, favorites }) => ({
  movies,
  errorMsg,
  isLoading,
  user,
  favorites
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMovies,
    hasErrored,
    checkIsLoading,
    fetchAndDeleteFavorite,
    fetchAndPostFavorite,
    getFavorites
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  addMovies: PropTypes.func,
  hasErrored: PropTypes.func,
  checkIsLoading: PropTypes.func,
  fetchAndDeleteFavorite: PropTypes.func,
  fetchAndPostFavorite: PropTypes.func,
  getFavorites: PropTypes.func,
  movies: PropTypes.array,
  errorMsg: PropTypes.string,
  isLoading: PropTypes.string,
  user: PropTypes.object,
  favorites: PropTypes.array,
  handleFavorite: PropTypes.func
}