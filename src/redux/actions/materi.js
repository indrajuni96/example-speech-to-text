import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

const ref = firestore().collection('materies')

const materiIsLoading = (isLoading) => ({
  type: types.MATERI_IS_LOADING,
  isLoading
})

const materiCreateFailed = () => ({
  type: types.CREATE_MATERI_FAILED
})

export const fetchMateris = () => async (dispatch) => {
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

export const createMateri = (data) => {
  return async (dispatch, getState) => {
    dispatch(materiIsLoading(true))

    try {
      const userUID = getState().authStore.userUID

      const response = await ref.add({
        kataBicara: data.kataBicara,
        createBy: userUID
      })

      dispatch({
        type: types.CREATE_MATERI_SUCCESS,
        materiData: {
          id: response.id,
          kataBicara: data.kataBicara,
          createBy: userUID
        }
      })
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
      const response = await ref.doc(id)
        .update({
          kataBicara: data.kataBicara
        })

      dispatch({
        type: types.UPDATE_MATERI,
        materiData: {
          id,
          kataBicara: data.kataBicara
        }
      })
    } catch (error) {
      throw error
    }
  }
}

export const deleteMateri = (id) => async (dispatch) => {
  try {
    await ref.doc(id).delete()

    dispatch({
      type: types.DELETE_MATERI,
      materiData: { id }
    })
  } catch (error) {
    throw error
  }
}