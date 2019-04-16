import {CHANGE_USERNAME, CHANGE_PASSWORD, SEND_LOGIN, RECEIVE_LOGIN} from './actionsType'

export type userState = {
  username: String,
  password: String
}

export type loginState = {
  user: userState,
  isSending: boolean,
  isLogin: boolean
}

const defaultLoginState:loginState = {
  user: {
    username: "hongxuan",
    password: "xuan"
  },
  isSending: false,
  isLogin: false
}


export const loginState = (state:loginState = defaultLoginState, action:any) => {
  switch (action.type) {
    case CHANGE_USERNAME: {
      const user = {...state.user, username:action.value}
      return {...state, user}
    }
    case CHANGE_PASSWORD: {
      const user =  {...state.user, password:action.value}
      return {...state, user}
    }
    case SEND_LOGIN: {
      return {...state, isSending: true}
    }
    case RECEIVE_LOGIN: {
      return {...state, isLogin:action.data, isSending: false}
    }
    default: 
      return state
  }
}
