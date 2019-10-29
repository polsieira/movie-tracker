import { user } from './user';

describe('user reducer', () => {
  it('should return the initial state', () => {
    //
    const expectedState = {};

    // Execution
    const result = user(undefined, {});

    // Expectation
    expect(result).toEqual(expectedState);
  });

  it('should return a user', () => {
    //
    const name = 'Pol';
    const id = 3;
    const isSignedIn = true;
    const userInfo = {
      name,
      id,
      isSignedIn
    };
    const mockAction = {
      type: 'LOGIN_USER',
      name,
      id,
      isSignedIn
    };

    // Execution
    const result = user(undefined, mockAction);

    // Expectation
    expect(result).toEqual(userInfo);
  });
});