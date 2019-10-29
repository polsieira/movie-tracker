import { getMovies, fetchFavorites, postFavorite, deleteFavorite } from './apiCalls'

describe('getMovies', () => {
  const mockResponse = [
    {
      adult: true,
      backdrop_path: 'somestring',
      genre_ids: [2],
      id: 12345,
      original_language: "en",
      original_title: "Some Title",
      overview: "here's a paragraph",
      release_date: '2019-10-29',
      title: "Some Title",
      video: false,
      vote_average: 1,
      vote_count: 1
    },
    {
      adult: false,
      backdrop_path: 'somestring1',
      genre_ids: [4],
      id: 56789,
      original_language: "en",
      original_title: "Some Other Title",
      overview: "here's a paragraph again",
      release_date: '2019-10-28',
      title: "Some Other Title",
      video: false,
      vote_average: 2,
      vote_count: 2
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse)
      })
    })
  })

  it('should resolve to return an array of movies if the response is ok', () => {
    expect(getMovies()).resolves.toEqual(mockResponse)
  })

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      ok: false
    })

    expect(getMovies()).rejects.toEqual('There was an error loading movies')
  })
})

describe('fetchFavorites', () => {
  const mockResponse = [
    {
      adult: true,
      backdrop_path: 'somestring',
      genre_ids: [2],
      id: 12345,
      original_language: "en",
      original_title: "Some Title",
      overview: "here's a paragraph",
      release_date: '2019-10-29',
      title: "Some Title",
      video: false,
      vote_average: 1,
      vote_count: 1
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch called with an id-interpolated url and the correct options', () => {
    const id = 1

    fetchFavorites(id)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/moviefavorites')
  })

  it('should return an array of a users favorites if the response is ok', () => {
    const id = 1

    expect(fetchFavorites(id)).resolves.toEqual(mockResponse)
  })

  it('should throw an error if the response is not ok', () => {
    const id = 1

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(fetchFavorites(id)).rejects.toEqual(Error('There was an error retrieving your favorites'))
  })
})

describe('postFavorite', () => {
  const mockRespomse = {
    movie_id: 1234,
    title: "a film",
    poster_path: "a poster path",
    release_date: "2019-10-29",
    vote_average: 2,
    overview: "an overview"
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: Promise.resolve(mockResponse)
      })
    })
  })

  it('should call fetch with the correct url and options', () => {
    const id = 1
    const faveInfo = {
      movie_id: 1234,
      title: "a film",
      poster_path: "a poster path",
      release_date: "2019-10-29",
      vote_average: 2,
      overview: "an overview"
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(faveInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    postFavorite(id, faveInfo)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/moviefavorites', options)

  })

  it('should return the favorited movie if response is ok', () => {
    const id = 1
    const faveInfo = {
      movie_id: 1234,
      title: "a film",
      poster_path: "a poster path",
      release_date: "2019-10-29",
      vote_average: 2,
      overview: "an overview"
    }
    expect(postFavorite(id, faveInfo)).resolves.toEqual(faveInfo)
  })
})

describe('deleteFavorite', () => {
  const mockResponse = 204

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 204
      })
    })
  })

  it('should call fetch with the correct url and options', () => {
    const userId = 1
    const faveId = 12345
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    deleteFavorite(userId,faveId)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/moviefavorites/12345', options)
  })

  it('should return a status code of 204 if the fetch was completed', () => {
    const userId = 1
    const faveId = 12345

    expect(deleteFavorite(userId, faveId)).resolves.toEqual(204)
  })
})