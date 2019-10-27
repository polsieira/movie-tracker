import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../apiCalls';
import './App.scss';
import { addMovies, isLoading, hasErrored } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';
import MovieInfo from '../MovieInfo/MovieInfo';
import LoginForm from '../LoginForm/Form';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';

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

  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={() => <MovieContainer />} />
        <Route exact path='/login' render={() => <LoginForm />} />
        <Route exact path='/movie/:id' render={({match}) => <MovieInfo id={match.params} />} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies, errorMsg, isLoading }) => ({
  movies,
  errorMsg,
  isLoading,
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMovies,
    hasErrored,
    isLoading,
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);