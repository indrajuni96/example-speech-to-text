import * as types from '../actions/ActionTypes'

const initialState = {
  materies: [],
  isLoading: false,
  hasError: false
}

const Materi = (state = initialState, action) => {
  switch (action.type) {
    case types.MATERI_IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case types.CREATE_MATERI_SUCCESS:
      return {
        ...state,
        isLoading: false,
        // materies: action.materi
      }
    case types.CREATE_MATERI_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    }
    default:
      return state
  }
}

export default Materi