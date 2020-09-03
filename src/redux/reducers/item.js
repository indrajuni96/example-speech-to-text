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
      let itemValue
      const result = state.items.sort(function (a, b) { return 0.5 - Math.random() })

      if (result.length > 0) {
        itemValue = result[0].nama
      }
      else itemValue = 'FINISH'

      return {
        ...state,
        currentItem: itemValue,
      }
    case actions.REMOVE_ITEM:
      let deleteItem = state.items
      deleteItem.splice(deleteItem.findIndex(val => val.nama == action.value), 1)

      return {
        ...state,
        items: deleteItem
      }
    default:
      return state
  }
}