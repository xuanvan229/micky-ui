export const ADD = 'ADD'
export const SEND_REQUEST_AUTH = 'SEND_REQUEST_AUTH'
export const RECEIVE_REQUEST_AUTH = 'RECEIVE_REQUEST_AUTH'

export const add:object = () => {
  return {
    type: ADD,
  }
}

export const sendRequestAuth:any = () => {
  return {
    type: SEND_REQUEST_AUTH,
  }
}

export const receiveRequestAuth:any = (value:boolean) => {
  return {
    type: RECEIVE_REQUEST_AUTH,
    value
  }
}