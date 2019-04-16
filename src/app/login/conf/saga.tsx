import { take, put, call, fork, select } from 'redux-saga/effects'
import {selectedLogin} from './selector';
import * as actionsType from './actionsType';
import * as actions from './actions';
import axios from 'axios'

const URL = 'http://micky.com/api/user/login'

export function sendLogin(data:any) {
  return axios({
    method: 'post',
    url: URL,
    data: {
      user: {
        ...data
      }
    }
  })
  .then((data) =>{
    if(data.status == 200) {
      return true
    } 
    return false
  })
  .catch((err) => {
    return false
  })
}


export function* submitLogin() {
  while(true) {
    console.log("RUN IT")
    yield take(actionsType.SEND_LOGIN)
    const login = yield select(selectedLogin)
    const userState = {...login.user}
    const data = yield call(sendLogin, userState)
    yield put(actions.receiveLogin(data))
  }
}