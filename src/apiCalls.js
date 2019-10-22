export const getMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=122a4b8a95e0b7af76974b5685d7799a');
  const data = await response.json();
  return data.results;
}

export const loginUser = async (userInfo) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch('http://localhost:3001/api/v1/login', options)
  const data = await response.json();
  console.log(data)
}