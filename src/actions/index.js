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
    type: 'HAS_ERRORED',
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
