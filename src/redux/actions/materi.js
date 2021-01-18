import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

const materiIsLoading = () => ({
  type: types.MATERI_IS_LOADING
})

const materiCreateSuccess = (materi) => ({
  type: types.CREATE_MATERI_SUCCESS,
  materi
})

const materiCreateFailed = () => ({
  type: types.CREATE_MATERI_FAILED
})

export const createMateri = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(materiIsLoading())

      const userUID = getState().authStore.userUID

      await firestore()
        .collection('materies')
        .add({
          kataBicara: data.kataBicara,
          createBy: userUID
        })

      dispatch(materiCreateSuccess(data))
    } catch (error) {
      dispatch(materiCreateFailed())
      throw new Error('failed create materi!')
    }
  }
}