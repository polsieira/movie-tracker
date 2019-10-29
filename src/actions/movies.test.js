import * as actions from '../actions';

describe('movie actions', () => {
  it('should have a type of ADD_MOVIES and movies as a payload ', () => {
    const movies = {
      title: 'Joker',
      release_date: '2019',
      average_rating: 7.5,
      popularity: 68.55
    }
    const expectedAction = {
      type: "ADD_MOVIES",
      movies,
    };

    expect(actions.addMovies(movies)).toEqual(expectedAction)
  });

});