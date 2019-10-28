export const getMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=122a4b8a95e0b7af76974b5685d7799a');
  if (!response.ok) {
    throw new Error('There was an error loading movies')
  }
  const data = await response.json();
  data.results.map(result => result.isFavorite = false)
  return data.results;
}

export const loginUserCheck = async (userInfo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://localhost:3001/api/v1/login', options)
  // if (!response.ok) {
  //   throw new Error('There was an error logining in')
  // }
  const data = await response.json();
  return data;
}

export const createUserCheck = async (userInfo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  const response = await fetch('http://localhost:3001/api/v1/users', options)

  const data = await response.json();
  return data;
}

export const fetchFavorites = async (id) => {
  const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`)
  if (!response.ok) {
    throw new Error('There was an error retrieving your favorites')
  }
  const data = await response.json();
  console.log('favorites from fetch', data.favorites)
  return data.favorites
}

export const postFavorite = async (id, faveInfo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(faveInfo),
    headers: {
      'Content-Type' : 'application/json'
    }
  }
  const response = await fetch(`http://localhost:3001/api/v1/users/${id}/moviefavorites`, options)
  const addedFavorite = await response.json();
  console.log('added favorite', addedFavorite)
  return addedFavorite
}

export const deleteFavorite = async (userId, faveId) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type' : 'application/json'
    }
  }

  const response = await fetch(`http://localhost:3001/api/v1/users/${userId}/moviefavorites/${faveId}`)
}