import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    //
    const expectedState = [];

    // Execution
    const result = user(undefined, {});

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should return movies', () => {
    //
    const moviesToAdd = [{
      title: 'Joker',
      release_date: '2019',
      average_rating: 7.5,
      popularity: 68.55
    }];
    const mockAction = {
      type: 'ADD_MOVIES',
      movies: moviesToAdd
    }

    // Execution
    const result = movies(undefined, mockAction);

    // Expectation
    expect(result).toEqual(moviesToAdd);
  });
});