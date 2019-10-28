// THIS IS THE STORE

import { combineReducers } from 'redux';
import { movies } from './movies';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { isLoading } from './isLoading';
<<<<<<< HEAD
import { isFavorite } from './favorite';
=======
import { favorites } from './favoritesRed'
>>>>>>> master

const rootReducer = combineReducers({
  movies,
  user,
  errorMsg,
  isLoading,
<<<<<<< HEAD
  isFavorite
=======
  favorites
>>>>>>> master
});

export default rootReducer;