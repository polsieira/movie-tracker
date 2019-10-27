export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVORITES':
      return action.faves;
    case 'ADD_FAVORITE':
      console.log('were here')
      return [...state, action.result]
    default:
        console.log(action.type)
      return state
  }
}