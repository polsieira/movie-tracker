export const isLoading = (state = '', action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.bool;
    default:
      return state;
  }
}