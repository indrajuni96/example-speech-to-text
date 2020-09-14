import * as actions from '../actions/item'

const initialState = {
  items: [],
  id: 0,
  currentItem: '',
}

export default function Item(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ITEMS:
      return {
        ...state,
        items: action.payload.items
      }
    case actions.RANDOM_ITEM:
      const randomIndex = Math.floor(Math.random() * state.items.length)

      return {
        ...state,
        id: state.items[randomIndex].id,
        currentItem: state.items[randomIndex].japanes,
      }
    case actions.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      }
    default:
      return state
  }
}