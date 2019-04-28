import { take, put, call, select } from 'redux-saga/effects'
import {selectedLogin} from './selector';
import * as actionsType from './actionsType';
import * as actions from './actions';
import axios from 'axios'
import {fetch} from '../../../utils';
const URL = 'http://micky.com/api/user/login'

export async function sendLogin(data:any) {
  try {
    let result = await fetch('POST',["user", "login"],  data)
    console.log("result =>", result)
    return result
  } catch(err) {
    console.log(err)
  }
}


export function* submitLogin() {
  while(true) {
    yield take(actionsType.SEND_LOGIN)
    const login = yield select(selectedLogin)
    const userState = {...login.user}
    const dataSend = {
      user: {
        ...userState
      }
    }
    const {data} = yield call(sendLogin, dataSend)
    console.log("THE DATA WE T AKE", data)
    yield put(actions.receiveLogin(data))
  }
}