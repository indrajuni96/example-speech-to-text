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
      let itemRandom
      const result = state.items.sort(function (a, b) { return 0.5 - Math.random() })

      if (result.length > 0) itemRandom = result[0].nama
      else itemRandom = 'FINISH'

      return {
        ...state,
        currentItem: itemRandom,
      }
    case actions.REMOVE_ITEM:
      state.items.splice(action.value[0].id, 1)

      return {
        ...state,
        // items: [...state.items, resultRemove]
      }
    default:
      return state
  }
}