export const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        name: action.name,
        id: action.id,
        isSignedIn: action.isSignedIn
      }

      case 'CREATE_USER':
        return {
          name: action.name,
          email: action.email,
          password: action.password
        }
    
    default:
      return state;
  }
}