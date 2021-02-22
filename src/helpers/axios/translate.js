import axios from './connection'

export const getTranslate = (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url)

      resolve(response.data)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}

// export const getTranslate = (url, body) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await axios.get(url)

//       resolve(response.data)
//     } catch (error) {
//       console.log(error)
//       reject(error)
//     }
//   })
// }