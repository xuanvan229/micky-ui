import { take, put, call, fork, select } from 'redux-saga/effects'

import * as actions from './action'


export function fetchPostsApi() {
  return fetch(`https://www.reddit.com/r/reactjs.json`)
    .then(response => response.json())
    .then(json => json.data.children.map((child:any) => child.data))
}

export function* fetchPosts() {
  yield put(actions.requestPosts())
  const posts = yield call(fetchPostsApi)
  yield put(actions.receivePosts(posts))
}

export function* startup() {
  yield fork(fetchPosts)
}