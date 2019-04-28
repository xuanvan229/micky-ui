import {FETCH_ALL_NOTE, RECEIVE_ALL_NOTE, FETCH_NOTE, RECEIVE_NOTE} from './actionsType'

export const fetchAllNote = () => {
  return {
    type: FETCH_ALL_NOTE
  }
}

export const receiveAllNote = (value:any) => {
  return {
    type: RECEIVE_ALL_NOTE,
    value
  }
}

export const fetchNote = () => {
  return {
    type: FETCH_ALL_NOTE
  }
}

export const receiveNote = (value:any) => {
  return {
    type: RECEIVE_ALL_NOTE,
    value
  }
}