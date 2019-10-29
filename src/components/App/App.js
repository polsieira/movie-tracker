import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../apiCalls';
import './App.scss';
import { addMovies, isLoading, hasErrored, fetchAndDeleteFavorite, fetchAndPostFavorite, getFavorites } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieInfo from '../MovieInfo/MovieInfo';
import LoginForm from '../LoginForm/Form';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    const { addMovies, isLoading, hasErrored } = this.props;
    try {
      isLoading(true);
      const movieData = await getMovies();
      isLoading(false);
      addMovies(movieData);
    } catch (error) {
      isLoading(false);
      hasErrored(error.message);
    }
  }

  checkFavorites = (movieId) => {
    const { favorites } = this.props
    let favorited = favorites.map(favorite => favorite.movie_id)
    return favorited.includes(movieId)
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
    }
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={() => <MovieContainer handleFavorite={this.handleFavorite} checkFavorites={this.checkFavorites} />} />
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/movie/:id' render={({match}) => <MovieInfo id={match.params} />} />
        <Route exact path='/favorites' render={() => <FavoritesContainer handleFavorite={this.handleFavorite} />}/>
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
    isLoading,
    fetchAndDeleteFavorite,
    fetchAndPostFavorite,
    getFavorites
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);