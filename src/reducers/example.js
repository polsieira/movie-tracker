export const foo = (state = [], action) => { //returns an initial default value
  switch (action.type) {
    case 'DO_FOO':
      return [...state, { id: Date.now(), foo: action.foo, favorited: false }]; // new value of state
    default:
      return state; // just in case we fuck up and don't pass though right action type
  }
}