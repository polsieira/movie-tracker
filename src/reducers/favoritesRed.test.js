import { favorites } from './favoritesRed'

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    //
    const expectedState = [];

    // Execution
    const result = favorites(undefined, {});

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should get favorites', () => {
    // Setup
    const mockAction = {
      type: 'GET_FAVORITES',
      faves: [{
        title: 'Joker',
        release_date: '2019',
        average_rating: 7.5,
        popularity: 68.55
      }]
    }
    const expectedState = [{
      title: 'Joker',
      release_date: '2019',
      average_rating: 7.5,
      popularity: 68.55
    }];

    // Execution
    const result = favorites(undefined, mockAction);

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should add favorite', () => {
    // Setup
    const mockAction = {
      type: 'ADD_FAVORITE',
      favorite: {
        title: 'Joker',
        release_date: '2019',
        average_rating: 7.5,
        popularity: 68.55
      }
    }
    const initialState = [{
      title: 'Wicked',
      release_date: '2017',
      average_rating: 6.5,
      popularity: 55.55
    }]
    const expectedState = [
      {
        title: 'Wicked',
        release_date: '2017',
        average_rating: 6.5,
        popularity: 55.55
      },
      {
        title: 'Joker',
        release_date: '2019',
        average_rating: 7.5,
        popularity: 68.55
      }
    ];

    // Execution
    const result = favorites(initialState, mockAction);

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should remove favorite', () => {
    // Setup
    const mockAction = {
      type: 'REMOVE_FAVORITE',
      movieId: 6
    }
    const initialState = [{
      title: 'Wicked',
      release_date: '2017',
      average_rating: 6.5,
      popularity: 55.55,
      movie_id: 5
    },
    {
      title: 'Joker',
      release_date: '2019',
      average_rating: 7.5,
      popularity: 68.55,
      movie_id: 6
    }]
    const expectedState = [
      {
        title: 'Wicked',
        release_date: '2017',
        average_rating: 6.5,
        popularity: 55.55,
        movie_id: 5
      }
    ];

    // Execution
    const result = favorites(initialState, mockAction);

    // Expectation
    expect(result).toEqual(expectedState);
  });

});