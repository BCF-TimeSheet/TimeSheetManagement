import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/'

const getPublicContent = () => {
  return axios.get(API_URL)
}

//To do API call to backend

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPublicContent,
}
