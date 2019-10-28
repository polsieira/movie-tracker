export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return action.faves;
    case 'ADD_FAVORITE':
      return [...state, action.favorite]
    case 'REMOVE_FAVORITE':
      const newState = state.filter(favorite => {
        return favorite.movie_id !== action.movieId
      })
      return newState;
    default:
      return state
  }
}