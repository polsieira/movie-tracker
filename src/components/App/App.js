import React, { Component } from 'react';
import { getMovies } from '../../apiCalls';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  async componentDidMount() {
    try {
      const movies = await getMovies();
      console.log(movies)
    } catch(error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className='App'>

      </div>
    )
  }
}

export default App;