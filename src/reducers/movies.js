export const movies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES': 
      return [...state, action.movies];
    default: 
      return state;
  }
}