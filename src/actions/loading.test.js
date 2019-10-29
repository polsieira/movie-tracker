import * as actions from '../actions';

describe('loading actions', () => {
  it('should have a type of CHECK_IS_LOADING and movies as a payload ', () => {
    const bool = true;
    const expectedAction = {
      type: "CHECK_IS_LOADING",
      bool
    };

    expect(actions.checkIsLoading(bool)).toEqual(expectedAction)
  });

});