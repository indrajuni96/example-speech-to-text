import * as types from '../actions/ActionTypes'

const initialState = {
  user: {},
  userUID: null,
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
        user: action.payload.data,
        userUID: action.payload.userUID
      }
    case `${types.AUTH_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }
    case `${types.LOGOUT_USER}_PENDING`:
      return {
        ...state,
        isLoading: true
      }
    case `${types.LOGOUT_USER}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        user: action.payload.data,
        userUID: action.payload.userUID
      }
    case `${types.LOGOUT_USER}_REJECTED`:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}