// THIS IS THE STORE

import { combineReducers } from 'redux';
import { movies } from './movies';
// EX: import { reducer } from './reducer';

// common convention to name the variable rootReducer
const rootReducer = combineReducers({
  // EX: reducer,
  movies,
});

export default rootReducer;