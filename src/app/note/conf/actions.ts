import * as types from './actionsType'

export const fetchAllNote = () => {
  return {
    type: types.FETCH_ALL_NOTE
  }
}

export const receiveAllNote = (value:any) => {
  return {
    type: types.RECEIVE_ALL_NOTE,
    value
  }
}

export const fetchNote = (id:number) => {
  return {
    type: types.FETCH_NOTE,
    id
  }
}

export const receiveNote = (value:any) => {
  return {
    type: types.RECEIVE_NOTE,
    value
  }
}

export const changeTitle = (value:string) => {
  return {
    type: types.CHANGE_TITLE,
    value
  }
}

export const changeContent = (value:string) => {
  return {
    type: types.CHANGE_CONTENT,
    value
  }
}

export const submitNote = () => {
  return {
    type: types.SUBMIT_NOTE
  }
}

export const afterSubmitNoteDone = () => {
  return {
    type: types.AFTER_SUBMIT_NOTE_DONE
  }
}

export const afterSubmitNoteFalse = () => {
  return {
    type: types.AFTER_SUBMIT_NOTE_FALSE
  }
}