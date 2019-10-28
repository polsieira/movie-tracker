export const isFavorite = (state = [], action) => {
  switch (action.type) {
    case 'IS_FAVORITE':
      return action.bool;
    default: 
      return state;
  }
}
