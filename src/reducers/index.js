// THIS IS THE STORE

import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { isLoading } from './isLoading';

const rootReducer = combineReducers({
  movies,
  user,
  errorMsg,
  isLoading
});

export default rootReducer;