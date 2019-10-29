export const isLoading = (state = '', action) => {
  switch (action.type) {
    case 'CHECK_IS_LOADING':
      return action.bool;
    default:
      return state;
  }
}