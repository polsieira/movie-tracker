import { loginUser } from '../apiCalls'

export const user = (state = [], action) => {
    switch(action.type) {
      case 'LOGIN_USER': 
        console.log(action.userInfo)
        //this is where we are going to POST our login info
        loginUser(action.userInfo)
        return action.userInfo;
      default: 
        return state;
    }
  }