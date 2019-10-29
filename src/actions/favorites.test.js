import * as actions from '../actions';

describe('favorites actions', () => {
  it('should have a type of GET_FAVORITES and movies as a payload', () => {
    const faves = {
      title: 'Joker',
      release_date: '2019',
      average_rating: 7.5,
      popularity: 68.55
    }
    const expectedAction = {
      type: "GET_FAVORITES",
      faves,
    };

    expect(actions.getFavorites(faves)).toEqual(expectedAction)
  });

  it('should have a type of ADD_FAVORITE and movies as a payload', () => {
    const favorite = {
      title: 'Joker',
      release_date: '2019',
      average_rating: 7.5,
      popularity: 68.55
    }
    const expectedAction = {
      type: "ADD_FAVORITE",
      favorite,
    };

    expect(actions.addFavorite(favorite)).toEqual(expectedAction)
  });

  it('should have a type of REMOVE_FAVORITE and movies as a payload', () => {
    const movieId = 444234
    const expectedAction = {
      type: "REMOVE_FAVORITE",
      movieId
    };

    expect(actions.removeFavorite(movieId)).toEqual(expectedAction)
  });

});