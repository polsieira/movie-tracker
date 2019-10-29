import * as actions from '../actions';

describe('loading actions', () => {
  it('should have a type of IS_LOADING and movies as a payload ', () => {
    const bool = true;
    const expectedAction = {
      type: "IS_LOADING",
      bool
    };

    expect(actions.isLoading(bool)).toEqual(expectedAction)
  });

});