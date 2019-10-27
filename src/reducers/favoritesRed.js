export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return action.faves;
    default:
      return state
  }
}