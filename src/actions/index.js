export const addMovies = movies => {
  console.log(movies)
  return ({ 
  type: 'ADD_MOVIES',
  movies
  })
}