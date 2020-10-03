import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import * as types from './ActionTypes'

export const register = (data) => ({
  type: types.REGISTER_USER,
  payload: new Promise(async (resolve, reject) => {
    try {
      const result = await auth().createUserWithEmailAndPassword(data.email, data.password)
      delete data.password

      await firestore().collection(`users`)
        .doc(result.user.uid)
        .set({
          namaLengkap: data.namaLengkap,
          alamat: data.alamat,
          email: data.email
        })

      resolve({ id: result.user.uid, ...data })
    } catch (error) {
      reject(error)
    }
  })
})