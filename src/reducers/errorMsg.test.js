import { errorMsg } from './errorMsg';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    //
    const expectedState = '';

    // Execution
    const result = errorMsg(undefined, {});

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should return a message', () => {
    //
    const message = 'You done messed up';
    const mockAction = {
      type: 'HAS_ERRORED',
      message
    }
    const expectedState = message;

    // Execution
    const result = errorMsg(undefined, mockAction);

    // Expectation
    expect(result).toEqual(message);
  });
});