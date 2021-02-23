import axios from './connection'

export const getTranslate = (url, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(url, data)

      resolve(response.data)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}