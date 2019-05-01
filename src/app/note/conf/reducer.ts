import * as types from './actionsType'

const defaultNote:any = {
  isFetching: false,
  data: []
}

export const allnoteState = (state:any = defaultNote, action:any) => {
  switch(action.type) {
    case types.FETCH_ALL_NOTE : {
      const result =  {...state, isFetching:true}
      return result
    }
    case types.RECEIVE_ALL_NOTE: {
      const result = {...state, data: action.value, isFetching: false}
      return result
    }
    default: 
      return state
  }
}

const defaultItemNote:any = {
  isFetching: false,
  data: {}
}

export const itemNote = (state:any = defaultItemNote, action:any) => {
  switch(action.type) {
    case types.FETCH_NOTE : {
      const result =  {...state, isFetching:true}
      return result
    }
    case types.RECEIVE_NOTE: {
      const result = {...state, data: action.value, isFetching: false}
      return result
    }
    default: 
      return state
  }
}


const defaultNewNote:any = {
  note: {
    title: "Example Titlte",
    content: "Example Content"
  },
  isSubmit:false,
  status: false
}

export const newNote = (state:any = defaultNewNote, action:any) => {
  switch(action.type) {
    case types.CHANGE_TITLE : {
      const note =  {...state.note, title:action.value}
      return {...state, note}
    }
    case types.CHANGE_CONTENT: {
      const note =  {...state.note, content:action.value}
      return {...state, note}
    }
    case types.SUBMIT_NOTE: {
      return {...state, isSubmit:true}
    }
    case types.AFTER_SUBMIT_NOTE_DONE: {
      return {...state, isSubmit: false, status: true}
    }
    case types.AFTER_SUBMIT_NOTE_FALSE: {
      return {...state, isSubmit: false}
    }
    default: 
      return state
  }
}
