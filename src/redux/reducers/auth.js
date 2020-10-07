import * as types from '../actions/ActionTypes'

const initialState = {
  user: {},
  isLoading: false,
  // loggedIn:false
}

export default function Auth(state = initialState, action) {
  switch (action.type) {
    case `${types.AUTH_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      }
    case `${types.AUTH_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case `${types.AUTH_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}