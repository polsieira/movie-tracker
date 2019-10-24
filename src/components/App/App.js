import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../apiCalls';
import './App.scss';
import { addMovies, isLoading, hasErrored } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';
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
    try {
      const movieData = await getMovies();
      this.props.addMovies(movieData);
    } catch (error) {
      this.props.addErrors(error.message);
    }
  }

  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={() => <MovieContainer />} />
        <Route exact path='/login' render={() => <LoginForm />} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies, errorMsg, isLoading }) => ({
  movies,
  errorMsg,
  isLoading
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addMovies,
    hasErrored,
    isLoading
  }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(App);