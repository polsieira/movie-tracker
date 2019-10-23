import { loginUserCheck } from '../apiCalls'

export const user = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      //this is where we are going to POST our login info
      loginUserCheck(action.userInfo)
      return action.userInfo;
    default:
      return state;
  }
}