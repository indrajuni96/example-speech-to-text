import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

export const register = (data) => ({
  type: types.REGISTER_USER,
  payload: new Promise(async (resolve, reject) => {
    try {
      const result = await auth().createUserWithEmailAndPassword(data.email.toLowerCase(), data.password)
      delete data.password

      await firestore().collection('users')
        .doc(result.user.uid)
        .set({
          nama: data.nama,
          nomor: data.nomor,
          email: data.email
        })

      resolve({ id: result.user.uid, ...data })
    } catch (error) {
      reject(error)
    }
  })
})

export const login = (data) => ({
  type: types.LOGIN_USER,
  payload: new Promise(async (resolve, reject) => {
    try {
      const dataLogin = await auth().signInWithEmailAndPassword(data.email.toLowerCase(), data.password)

      const dataUser = await firestore().collection('users').doc(dataLogin.user.uid).get()

      resolve({ data: dataUser._data, userUID: dataLogin.user.uid })
    } catch (error) {
      reject(error)
    }
  })
})

export const logout = () => ({
  type: types.LOGOUT_USER,
  payload: new Promise(async (resolve, reject) => {
    try {
      await auth().signOut()
      resolve({ data: {}, userUID: null })
    }
    catch (error) {
      reject(error)
    }
  })
})