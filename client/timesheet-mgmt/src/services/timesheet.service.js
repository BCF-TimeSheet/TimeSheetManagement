import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8081/timesheet/'

//Get all timesheet
const getAllTimeSheet = () => {
  return axios.get(API_URL + 'getTimeSheet', { headers: authHeader() })
}

//Save timesheet
const saveTimeSheet = (timesheet) => {
  console.log(timesheet)
  return axios.post(API_URL + 'updateTimeSheet', timesheet, {
    headers: authHeader(),
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllTimeSheet,
  saveTimeSheet,
}
