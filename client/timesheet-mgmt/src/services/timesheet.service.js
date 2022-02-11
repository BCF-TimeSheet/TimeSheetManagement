import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:9090/timesheet/'

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

//Save timesheet
const saveTemplate = (days) => {
  console.log(days)
  return axios.post(API_URL + 'saveTemplate', days, {
    headers: authHeader(),
  })
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllTimeSheet,
  saveTimeSheet,
  saveTemplate,
}
