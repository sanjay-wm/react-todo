import {FILTER_ALL} from './actionTypes'
import { _ } from 'underscore'
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes'

const initialTodoState = {
  nextId: 1,
  data: {}
}

export const todos = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return (
        {
          ...state,
          data: {
            ...state.data,
            [state.nextId]: {
              completed: false,
              content: action.payload.content
            },
          },
          nextId: state.nextId + 1
        }
      )
    }
    case TOGGLE_TODO: {
      return (
        {
          ...state,
          data: {
            ...state.data,
            [action.payload.id]: {
              ...state.data[action.payload.id],
              completed: !(state.data[action.payload.id].completed)
            }
          }
        }
      )
    }
    default: {
      console.log(...state.data)
      return state
    }
  }
}

export const  visibilityFilter = (state = {activeFilter: FILTER_ALL}, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return({
        activeFilter: action.payload.filter
      })
    }
    default: {
      return state;
    }
  }
}