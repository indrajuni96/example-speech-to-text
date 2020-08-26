export const GET_ITEMS = "GET_ITEMS"

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