
import {REQUEST_POST, RECIEVE_POST} from './actionType'

export const requestPosts:any = () => {
  return {
    type: REQUEST_POST,
  }
}
export const receivePosts:any = (data:object) => {
  return {
    type: RECIEVE_POST,
    data
  }
}

