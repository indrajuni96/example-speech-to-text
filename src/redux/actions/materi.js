import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

const materiIsLoading = (isLoading) => ({
  type: types.MATERI_IS_LOADING,
  isLoading
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
    dispatch(materiIsLoading(true))

    try {
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

    dispatch(materiIsLoading(false))
  }
}

export const fetchMateris = () => {
  return async (dispatch) => {
    try {
      let results = []

      const response = await firestore()
        .collection('materies')
        .get()

      response.docs.forEach((doc) => {
        results.push(doc.data())
      })

      console.log(results)
    } catch (error) {
      throw error
    }
  }
}