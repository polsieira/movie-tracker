// THIS IS THE STORE

import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { isLoading } from './isLoading';
import { favorites } from './favoritesRed'

const rootReducer = combineReducers({
  movies,
  user,
  errorMsg,
  isLoading,
  favorites
});

export default rootReducer;