import axios from 'axios'

const http = axios.create({
  baseURL: 'https://translate-japanese.herokuapp.com/api/',
  headers: { 'Content-Type': 'application/json' }
})

export default http