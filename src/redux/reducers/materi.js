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
        isLoading: action.isLoading
      }
    case types.CREATE_MATERI_SUCCESS:
      return {
        ...state,
        materies: state.materies.concat(action.materiData)
      }
    case types.CREATE_MATERI_FAILED: {
      return {
        ...state,
        hasError: true
      }
    }
    case types.FETCH_MATERIES: {
      return {
        ...state,
        materies: action.results
      }
    }
    default:
      return state
  }
}

export default Materi