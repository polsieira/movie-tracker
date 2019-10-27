export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return [...state,action.faves];
    case 'ADD_FAVORITE':
      return [...state, action.posted]
    default:
      return state
  }
}