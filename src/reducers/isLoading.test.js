import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    //
    const expectedState = '';

    // Execution
    const result = isLoading(undefined, {});

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should return a bool', () => {
    //
    const bool = true;
    const mockAction = {
      type: 'IS_LOADING',
      bool
    }

    // Execution
    const result = isLoading(undefined, mockAction);

    // Expectation
    expect(result).toEqual(bool);
  });
});