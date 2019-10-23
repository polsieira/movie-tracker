// THIS IS THE STORE

import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user'
import { error } from './error'
// EX: import { reducer } from './reducer';

// common convention to name the variable rootReducer
const rootReducer = combineReducers({
  // EX: reducer,
  movies,
  user,
  error
});

export default rootReducer;