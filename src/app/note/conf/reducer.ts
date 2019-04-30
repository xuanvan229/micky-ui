import {FETCH_ALL_NOTE, RECEIVE_ALL_NOTE, FETCH_NOTE, RECEIVE_NOTE, CHANGE_TITLE, CHANGE_CONTENT} from './actionsType'

const defaultNote:any = {
  isFetching: false,
  data: []
}

export const noteState = (state:any = defaultNote, action:any) => {
  switch(action.type) {
    case FETCH_ALL_NOTE : {
      const result =  {...state, isFetching:true}
      return result
    }
    case RECEIVE_ALL_NOTE: {
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
    case FETCH_NOTE : {
      const result =  {...state, isFetching:true}
      return result
    }
    case RECEIVE_NOTE: {
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
 }
}

export const newNote = (state:any = defaultNewNote, action:any) => {
  switch(action.type) {
    case CHANGE_TITLE : {
      const note =  {...state.note, title:action.value}
      return {...state, note}
    }
    case CHANGE_CONTENT: {
      const note =  {...state.note, content:action.value}
      return {...state, note}
    }
    default: 
      return state
  }
}
