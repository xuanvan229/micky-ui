import {FETCH_ALL_NOTE, RECEIVE_ALL_NOTE, FETCH_NOTE, RECEIVE_NOTE} from './actionsType';

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

export const itemNote = (state:any = defaultNote, action:any) => {
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