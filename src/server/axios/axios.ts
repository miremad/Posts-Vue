import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-type': 'application/json'
  }
})
