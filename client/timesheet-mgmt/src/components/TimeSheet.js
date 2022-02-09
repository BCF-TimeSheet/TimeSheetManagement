import React, { useState, useEffect, useMemo } from 'react'
import TimesheetService from '../services/timesheet.service'
import TimeSheetTable from './TimeSheetTable'

function TimeSheet(props) {
  const [timesheet, setTimeSheet] = useState([])
  const [week, setWeek] = useState([])

  const getTimeSheet = async () => {
    const response = await TimesheetService.getAllTimeSheet().catch((err) =>
      console.log(err)
    )
    if (response) {
      const timesheetRes = response.data
      console.log(response.data)
      console.log(timesheetRes[0].days)
      setWeek(timesheetRes[0].days)
      setTimeSheet(response.data)
    }
  }
  useEffect(() => {
    getTimeSheet()
  }, [])

  return (
    <div>
      {week.length > 0 && timesheet.length > 0 && (
        <TimeSheetTable week={week} timesheet={timesheet[0]} />
      )}
    </div>
  )
}

export default TimeSheet
// useEffect(() => {
// TimesheetService.getAllTimeSheet().then(
//   (response) => {
//     console.log(response.data)

//     setTimeSheet(response.data)
//     console.log(timesheet)
//   },
//   (err) => {
//     console.log('Err: ' + err)
//   }
// )
// }, [])
