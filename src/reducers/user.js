export const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        name: action.name,
        id: action.id,
        isSignedIn: action.isSignedIn
      }
    
    default:
      return state;
  }
}