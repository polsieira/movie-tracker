import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../../apiCalls';
import './App.scss';
import { addMovies } from '../../actions';
import MovieContainer from '../MovieContainer/MovieContainer';

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
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className='App'>
        {this.props.movies && <MovieContainer />}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addMovies: movies => dispatch(addMovies(movies))
})

const mapStateToProps = state => ({
  movies: state.movies,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);