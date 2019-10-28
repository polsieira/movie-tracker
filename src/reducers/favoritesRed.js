export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return action.faves;
    case 'ADD_FAVORITE':
      return [...state, action.favorite]
    case 'REMOVE_FAVORITE':
        return [...state]
    default:
      return state
  }
}