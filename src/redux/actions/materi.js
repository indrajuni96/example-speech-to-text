import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

export const createMateri = (data) => {
  return async (dispatch, getState) => {
    const userUID = getState().authStore.userUID

    console.log(userUID)
    console.log(data)
    console.log('action createMateri')
  }
}