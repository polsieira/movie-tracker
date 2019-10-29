import * as actions from '../actions';

describe('user actions', () => {
  it('should have a type of LOGIN_USER and return a name, id, and boolean', () => {
    const name = 'Pol';
    const id = 2;
    const isSignedIn = true;
    const userInfo = {
      name,
      id,
      isSignedIn
    }
    const expectedAction = {
      type: "LOGIN_USER",
      name,
      id,
      isSignedIn
    };

    expect(actions.loginUser(userInfo)).toEqual(expectedAction)
  });

  it('should have a type of LOGIN_USER and return a name, id, and boolean', () => {
    const name = 'Pol';
    const email = 'pol@me.com';
    const password = 'password';
    const userInfo = {
      name,
      email,
      password
    }
    const expectedAction = {
      type: "CREATE_USER",
      name,
      email,
      password
    };

    expect(actions.createUser(userInfo)).toEqual(expectedAction)
  });



});