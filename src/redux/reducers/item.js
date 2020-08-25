import * as actions from '../actions/item'
import { act } from 'react-test-renderer'

const initialState = {
  item: []
}

export default function Item(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        item: action.payload.items
      }
    default:
      return state
  }
}