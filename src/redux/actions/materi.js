import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

// export const createMateri = (data) => {
//   return async (dispatch, getState) => {
//     const userUID = getState().authStore.userUID

//     firestore().collection('materies')
//       .add({
//         kataBicara: data.kataBicara,
//         createBy: userUID
//       })
//       .then(() => console.log('materies success added!'))
//       .catch((error) => console.log(error))
//   }
// }

export const createMateri = (data) => ({
  type: types.CREATE_MATERI,
  payload: new Promise(async (resolve, reject) => {
    try {
      const result = await firestore().collection('materies')
        .add({
          kataBicara: data.kataBicara,
          // createBy: userUID
        })
      console.log(result)

      resolve({
        result
      })
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
})