export const movies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES': 
    console.log(action.movies)
      return action.movies;
    default: 
      return state;
  }
}