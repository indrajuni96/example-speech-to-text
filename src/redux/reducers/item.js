import * as actions from '../actions/item'
import { act } from 'react-test-renderer'

const initialState = {
  item: [],
  items: [
    {
      id: 1,
      nama: 'sapi'
    },
    {
      id: 2,
      nama: 'ayam'
    },
    {
      id: 3,
      nama: 'monyet'
    }
  ],
  currentItem: ''
}

export default function Item(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        item: action.payload.items
      }
    case actions.RANDOM_ITEM:
      const result = state.items.sort(function (a, b) { return 0.5 - Math.random() })
      const removeItem = state.items.splice(result[0].id, 1)

      console.log(result)


      return {
        ...state,
        // currentItem: result[0].nama,
        // items: state.items.splice(result[0].id, 1)
      }
    default:
      return state
  }
}