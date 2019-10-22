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

export const loginUser = userInfo => {
  return ({
    type: 'LOGIN_USER',
    userInfo
  })
}