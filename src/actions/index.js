export const addMovies = movies => {
  return ({
    type: 'ADD_MOVIES',
    movies
  })
}

export const addErrors = message => {
  return ({
    type: 'ADD_ERRORS',
    message
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