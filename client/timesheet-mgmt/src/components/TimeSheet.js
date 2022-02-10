import React, { useState, useEffect } from 'react'
import TimesheetService from '../services/timesheet.service'
// import AnotherTable from './AnotherTable'
import TimeSheetTable from './TimeSheetTable'
import DatePicker from 'react-datepicker'

function TimeSheet(props) {
  const [timesheet, setTimeSheet] = useState([])
  const [week, setWeek] = useState([])
  const [selectedDate, setSelectedDate] = useState()
  const [minDay, setMinDay] = useState()
  const [maxDay, setMaxDay] = useState()
  const [timeSheetIndex, setTimeSheetIndex] = useState(0)

  const getTimeSheet = async () => {
    const response = await TimesheetService.getAllTimeSheet().catch((err) =>
      console.log(err)
    )
    if (response) {
      const timesheetRes = response.data
      console.log(
        'timesheet: ',
        response.data[1].days[6].date.replace(/-/g, '/')
      )
      // console.log(timesheetRes[0].days)
      setWeek(timesheetRes[timeSheetIndex].days)
      setTimeSheet(response.data)

      // timesheetRes.forEach((ts) => {
      // 	if (ts.)
      // })

      setSelectedDate(
        Date.parse(
          response.data[timeSheetIndex].days[6].date.replace(/-/g, '/')
        )
      )
      setMinDay(
        Date.parse(
          response.data[response.data.length - 1].days[6].date.replace(
            /-/g,
            '/'
          )
        )
      )
      setMaxDay(Date.parse(response.data[0].days[6].date.replace(/-/g, '/')))
    }
  }
  useEffect(() => {
    getTimeSheet()
  }, [])

  const handleOnDayChange = (date) => {
    timesheet.forEach((t, i) => {
      if (Date.parse(t.weekEnd.replace(/-/g, '/')) == date.getTime()) {
        setSelectedDate(date)
        setWeek(t.days)
      }
    })
  }
  return (
    <div>
      <div>
        {' '}
        <p>Week Ending</p>
        {selectedDate > 0 && minDay && maxDay && (
          <DatePicker
            onChange={(date) => handleOnDayChange(date)}
            selected={selectedDate}
            dateFormat="yyyy-MM-dd"
            filterDate={(date) =>
              date.getDay() !== 0 &&
              date.getDay() !== 1 &&
              date.getDay() !== 2 &&
              date.getDay() !== 3 &&
              date.getDay() !== 4 &&
              date.getDay() !== 5
            }
            minDate={minDay}
            maxDate={maxDay}
          />
        )}
        <p></p>
      </div>
      {week.length > 0 && timesheet.length > 0 && (
        <TimeSheetTable week={week} timesheet={timesheet[timeSheetIndex]} />
      )}
      {/* <AnotherTable /> */}
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
