export const GET_ITEMS = "GET_ITEMS"
export const RANDOM_ITEM = "RANDOM_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

export const getItems = () => {
  return {
    type: GET_ITEMS,
    payload: {
      items: [
        {
          id: 1,
          japanes: 'なにしてるの'
        },
        {
          id: 2,
          japanes: 'チキン'
        },
        {
          id: 3,
          japanes: 'おはようございます'
        },
        {
          id: 4,
          japanes: 'やくにたたない'
          // やく に たた ない
        }
      ]
    }
  }
}

export const randomItem = () => {
  return {
    type: RANDOM_ITEM
  }
}

export const removeItem = (value) => {
  return {
    type: REMOVE_ITEM,
    value
  }
}
