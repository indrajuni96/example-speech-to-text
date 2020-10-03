import * as types from '../actions/ActionTypes'

const initialState = {
  user: {},
  isLoading: false
}

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case `${types.REGISTER_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      }
    case `${types.REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    case `${types.REGISTER_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}