import {FETCH_ALL_NOTE, RECEIVE_ALL_NOTE, FETCH_NOTE, RECEIVE_NOTE, CHANGE_TITLE, CHANGE_CONTENT} from './actionsType'

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

export const fetchNote = (id:number) => {
  return {
    type: FETCH_NOTE,
    id
  }
}

export const receiveNote = (value:any) => {
  return {
    type: RECEIVE_NOTE,
    value
  }
}



export const changeTitle = (value:string) => {
  return {
    type: CHANGE_TITLE,
    value
  }
}

export const changeContent = (value:string) => {
  return {
    type: CHANGE_CONTENT,
    value
  }
}