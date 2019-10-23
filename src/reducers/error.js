export const error = (state = '', action) => {
  switch (action.type) {
    case 'ADD_ERRORS':
      return action.message;
    default:
      return state;
  }
}

