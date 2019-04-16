
import {CHANGE_USERNAME, CHANGE_PASSWORD, SEND_LOGIN, RECEIVE_LOGIN} from './actionsType'

export const changeUsername:any = (value:string) => {
  return {
    type: CHANGE_USERNAME,
    value
  }
}
export const changePassword:any = (value:string) => {
  return {
    type: CHANGE_PASSWORD,
    value
  }
}

export const sendLogin:any = () => {
  return {
    type: SEND_LOGIN
  }
}

export const receiveLogin:any = (data:boolean) => {
  return {
    type: RECEIVE_LOGIN,
    data
  }
}