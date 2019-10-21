export const foo = (state = [], action) => { //returns an initial default value
  switch (action.type) {
    case 'DO_FOO':
      return [...state, { id: Date.now(), foo: action.foo, favorited: false }]; // new value of state
    default:
      return state; // all reducers fire on action so must return something, this is REQUIRED
  }
}