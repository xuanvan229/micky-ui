import {REQUEST_POST, RECIEVE_POST} from './actionType'

const defautState:any = {
  data: [],
  isFetching: false
}

export const page =  (state = defautState, action:any) => {
  switch (action.type) {
    case REQUEST_POST:
      return {...state, isFetching:true}
    case RECIEVE_POST:
      return {...state, data:action.data, isFetching:false}
    default:
      return state
  }
}
