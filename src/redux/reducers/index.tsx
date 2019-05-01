import { combineReducers } from 'redux'
import {page} from '../../app/home/conf/reducer'
import {loginState} from '../../app/login/conf/reducer'
import {allnoteState, itemNote, newNote} from '../../app/note/conf/reducer'

const post =  (state = 0, action:any) => {
  switch (action.type) {
    case "ADD":
      return state + 1
    default:
      return state
  }
}

const checkAuth = (state = {isSend: false, isLogin: false}, action:any) => {
  switch (action.type) {
    case "SEND_REQUEST_AUTH":
      return {...state, isSend: true}
    case "RECEIVE_REQUEST_AUTH":
      return {...state, isSend: false, isLogin: action.value}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  post,
  loginState,
  allnoteState,
  newNote,
  itemNote,
  checkAuth,
  page
})

export default rootReducer