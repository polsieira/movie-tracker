import * as actions from '../actions';

describe('error actions', () => {
  it('should have a type of HAS_ERRORED and a message as a payload', () => {
    const message = 'Pass test'
    const expectedAction = {
      type: "HAS_ERRORED",
      message
    };

    expect(actions.hasErrored(message)).toEqual(expectedAction)
  });

});