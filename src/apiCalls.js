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