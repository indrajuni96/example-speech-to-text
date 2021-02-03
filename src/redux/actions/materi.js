import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

const ref = firestore().collection('materies')

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

export const fetchMateris = () => {
  return async (dispatch) => {
    try {
      let results = []

      const response = await ref.get()

      response.docs.forEach((doc) => {
        const { kataBicara, createBy } = doc.data()
        results.push({
          id: doc.id,
          kataBicara,
          createBy
        })
      })

      dispatch({
        type: types.FETCH_MATERIES,
        results
      })
    } catch (error) {
      throw error
    }
  }
}

export const createMateri = (data) => {
  return async (dispatch, getState) => {
    dispatch(materiIsLoading(true))

    try {
      const userUID = getState().authStore.userUID

      await ref.add({
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

export const updateMateri = (id, data) => {
  return async (dispatch) => {
    try {

    } catch (error) {
      throw error
    }
  }
}