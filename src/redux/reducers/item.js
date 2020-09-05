import * as actions from '../actions/item'

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
  id: 0,
  currentItem: '',
}

export default function Item(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        item: action.payload.items
      }
    case actions.RANDOM_ITEM:
      console.log(state.item)

      let id = null, itemValue = ''
      const result = state.item.sort((a, b) => 0.5 - Math.random())

      if (result.length > 0) {
        id = result[0].id
        itemValue = result[0].japanes
      }
      else itemValue = 'FINISH'

      return {
        ...state,
        id,
        currentItem: itemValue,
      }
    case actions.REMOVE_ITEM:
      return {
        ...state,
        item: state.item.filter(item => item.id !== action.id)
      }
    default:
      return state
  }
}