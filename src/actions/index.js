import { postFavorite } from '../apiCalls'

export const addMovies = movies => {
  return ({
    type: 'ADD_MOVIES',
    movies
  })
}

export const hasErrored = message => {
  return ({
    type: 'HAS_ERRORED',
    message
  })
}

export const isLoading = bool => {
  return ({
    type: 'IS_LOADING',
    bool
  })
}

export const loginUser = ({ name, id, isSignedIn }) => {
  return ({
    type: 'LOGIN_USER',
    name,
    id,
    isSignedIn
  })
}

export const createUser = ({ name, email, password }) => {
  return ({
    type: 'CREATE_USER',
    name, 
    email,
    password
  })
}

export const getFavorites = faves => {
  return ({
    type: 'GET_FAVORITES',
    faves
  })
}

export const addFavorite = favorite => {
  return ({
    type: 'ADD_FAVORITE',
    favorite
  })
}

export const fetchAndPostFavorite = (id,favorite) => {
  return (dispatch) => {
    return postFavorite(id, favorite)
      .then(result => dispatch(addFavorite(result)) )
  } 
}


export const removeFavorite = (userId, movieId) => {
  return ({
    type: 'REMOVE_FAVORITE',
    userId,
    movieId
  })
}

