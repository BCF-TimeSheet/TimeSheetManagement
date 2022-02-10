/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect, useRef } from 'react'
import Select from 'react-select'
import TimesheetService from '../services/timesheet.service'

function TimeSheetTable(props) {
  const TEMPLATE_ID = '620591b8c1180d77866f3170'

  const [week, setWeek] = useState(props.timesheet.days)
  const [timesheet, setTimesheet] = useState(props.timesheet)
  console.log('props weeks: ', props.timesheet.days)
  useEffect(() => {})

  var initialStartime = []
  var initialEndTime = []
  var initialTotalHours = []
  var initialFloating = []
  var initialVacation = []
  props.timesheet.days.forEach((w) => {
    initialStartime.push(parseInt(w.startTime))
    initialEndTime.push(parseInt(w.endTime))
    initialTotalHours.push(parseInt(w.endTime) - parseInt(w.startTime))
    initialFloating.push(w.floating)
    initialVacation.push(w.vacation)
  })

  console.log('initialStartime', initialStartime)
  console.log('initialEndTime', initialEndTime)

  console.log('initialTotalHours', initialTotalHours)
  console.log('initialFloating', initialFloating)

  const [startTime, setStartTime] = useState([...initialStartime])
  const [endTime, setEndTime] = useState([...initialEndTime])
  const [totalHour, setTotalHour] = useState([...initialTotalHours])
  const [totalBillingHour, setTotalBillingHour] = useState(
    props.timesheet.totalBillingHours
  )
  const [totalCompensationHours, setTotalCompensationHours] = useState(
    props.timesheet.totalCompensationHours
  )

  const [vacation, setVacation] = useState(initialVacation) //initVacation
  const [floating, setFloating] = useState(initialFloating) //initFloat
  const floatLeft = useRef(timesheet.floatingDayLeft)
  const vacaLeft = useRef(timesheet.vacationDayLeft)
  const viewMode = props.timesheet.submissionStatus == 'completed'
  console.log('props timesheet: ', timesheet)

  useEffect(() => {
    console.log('props changed')
    const currWeeks = props.timesheet.days
    const currTimeSheet = props.timesheet
    setStartTime(initialStartime)
    setEndTime(initialEndTime)
    setTotalHour(initialTotalHours)
    setFloating(initialFloating)
    setVacation(initialVacation)
    setWeek(currWeeks)
    setTimesheet(currTimeSheet)
  }, [props])

  useEffect(() => {
    const curTotalHours = []
    const currTimeSheet = { ...timesheet }
    const currWeek = [...week]
    week.forEach((w) => {
      const startTime = parseInt(w.startTime)
      const endTime = parseInt(w.endTime)
      if (startTime < endTime) {
        curTotalHours.push(parseInt(w.endTime) - parseInt(w.startTime))
      } else curTotalHours.push(0)
    })
    setTotalHour([...curTotalHours])

    const currTotalBillingHours = curTotalHours.reduce((s, i) => s + i)
    const countFloat = floating.filter(Boolean).length
    const countVaca = vacation.filter(Boolean).length
    const currTotalCompensationHours =
      curTotalHours.reduce((s, i) => s + i) + countFloat * 9 + countVaca * 9

    setTotalBillingHour(currTotalBillingHours)
    setTotalCompensationHours(currTotalCompensationHours)

    setTimesheet({
      ...currTimeSheet,
      days: currWeek,
      totalCompensationHours: currTotalCompensationHours,
      totalBillingHours: currTotalBillingHours,
    })
  }, [week])

  const handleOnStartTime = (e, i) => {
    console.log(e.value, 'index', i)
    const newStartTime = [...startTime]
    newStartTime[i] = e.value
    setStartTime([...newStartTime])
    const currWeek = [...week]
    currWeek.splice(i, 1, { ...week[i], startTime: e.value.toString() })
    // console.log('currWeek', currWeek)
    setWeek([...currWeek])
    // setWeek({ ...week, startTime: e.value })
  }
  const handleOnEndTime = (e, i) => {
    console.log(e.value, 'index', i)
    const newEndTime = [...endTime]
    newEndTime[i] = e.value
    setEndTime([...newEndTime])
    const currWeek = [...week]
    currWeek.splice(i, 1, { ...week[i], endTime: e.value.toString() })
    // console.log('currWeek', currWeek)
    setWeek([...currWeek])
  }

  const handleFloat = (e, i) => {
    const float = [...floating]
    const vaca = [...vacation]
    const currWeek = [...week]
    const currTimeSheet = { ...timesheet }

    if (e.target.checked == true && vaca[i] == true) {
      //Update floating-vacation state
      float.splice(i, 1, true)
      vaca.splice(i, 1, false)
      setFloating([...float])
      setVacation([...vaca])

      //Update float-vacation day left state
      floatLeft.current = floatLeft.current - 1
      vacaLeft.current = vacaLeft.current + 1

      //Update start-end time state
      handleOnStartTime({ value: parseInt('NA') }, i)
      handleOnEndTime({ value: parseInt('NA') }, i)

      //Update week state
      currWeek.splice(i, 1, {
        ...week[i],
        startTime: 'NA',
        endTime: 'NA',
        floating: true,
        vacation: false,
      })
      setWeek([...currWeek])

      setTimesheet({
        ...currTimeSheet,
        days: [...currWeek],
        floatingDayLeft: floatLeft.current,
        vacationDayLeft: vacaLeft.current,
      })
    } else if (e.target.checked == true && vaca[i] == false) {
      //Update floating state
      float.splice(i, 1, true)
      setFloating([...float])

      //Decrease floating day left
      floatLeft.current = floatLeft.current - 1

      //Update start-end time state
      handleOnStartTime({ value: parseInt('NA') }, i)
      handleOnEndTime({ value: parseInt('NA') }, i)

      //Update week state
      currWeek.splice(i, 1, {
        ...week[i],
        startTime: 'NA',
        endTime: 'NA',
        floating: true,
      })
      setWeek([...currWeek])
      setTimesheet({
        ...currTimeSheet,
        days: [...currWeek],
        floatingDayLeft: floatLeft.current,
        vacationDayLeft: vacaLeft.current,
      })
    } else {
      //Update floating state
      float.splice(i, 1, false)
      setFloating([...float])

      //Update float date left state
      floatLeft.current = floatLeft.current + 1

      //Update week state
      currWeek.splice(i, 1, { ...week[i], floating: false })
      setWeek([...currWeek])
      setTimesheet({
        ...currTimeSheet,
        days: [...currWeek],
        floatingDayLeft: floatLeft.current,
        vacationDayLeft: vacaLeft.current,
      })
    }
  }

  const handleVaca = (e, i) => {
    const float = [...floating]
    const vaca = [...vacation]
    const currWeek = [...week]
    const currTimeSheet = { ...timesheet }

    if (e.target.checked == true && float[i] == true) {
      float.splice(i, 1, false)
      vaca.splice(i, 1, true)
      setFloating([...float])
      setVacation([...vaca])
      //Decrease vacation day left
      vacaLeft.current = vacaLeft.current - 1
      floatLeft.current = floatLeft.current + 1

      handleOnStartTime({ value: parseInt('NA') }, i)
      handleOnEndTime({ value: parseInt('NA') }, i)

      currWeek.splice(i, 1, {
        ...week[i],
        startTime: 'NA',
        endTime: 'NA',
        floating: false,
        vacation: true,
      })
      setWeek([...currWeek])
      setTimesheet({
        ...currTimeSheet,
        days: [...currWeek],
        floatingDayLeft: floatLeft.current,
        vacationDayLeft: vacaLeft.current,
      })
    } else if (e.target.checked == true && float[i] == false) {
      vaca.splice(i, 1, true)
      setVacation([...vaca])

      handleOnStartTime({ value: parseInt('NA') }, i)
      handleOnEndTime({ value: parseInt('NA') }, i)

      //Decrease vacation day left
      vacaLeft.current = vacaLeft.current - 1
      currWeek.splice(i, 1, {
        ...week[i],
        startTime: 'NA',
        endTime: 'NA',
        vacation: true,
      })
      setWeek([...currWeek])
      setTimesheet({
        ...currTimeSheet,
        days: [...currWeek],
        floatingDayLeft: floatLeft.current,
        vacationDayLeft: vacaLeft.current,
      })
    } else {
      vaca.splice(i, 1, false)
      setVacation([...vaca])
      //Increase vacation day left
      vacaLeft.current = vacaLeft.current + 1
      currWeek.splice(i, 1, { ...week[i], vacation: false })
      setWeek([...currWeek])
      setTimesheet({
        ...currTimeSheet,
        days: [...currWeek],
        floatingDayLeft: floatLeft.current,
        vacationDayLeft: vacaLeft.current,
      })
    }
  }

  const handleStatusOpt = (e) => {
    const stt = props.timesheet.submissionStatus
    console.log('stt', stt)
    console.log('stt change to', e.value)
    const updateStt = { ...props.timesheet, submissionStatus: e.value }
    console.log('updatestt: ', updateStt)
    setTimesheet(updateStt)
  }

  const isWeekend = (week) => {
    return week.day == 'Sunday' || week.day == 'Saturday'
  }

  const handleOnSaveTimeSheet = (bodyTs) => {
    console.log('saved trigger')

    TimesheetService.saveTimeSheet(bodyTs).then(
      (res) => {
        console.log('saved', res)
        alert('Saved!')
        // window.location.reload()
      },
      (err) => {
        console.log('err when save', err)
      }
    )
  }

  const handleOnSetDefault = (bodyTs) => {
    const template = { id: TEMPLATE_ID, days: bodyTs.days }
    console.log('bodyTs', template)

    TimesheetService.saveTemplate(template).then(
      (res) => {
        console.log('saved template', res)
        alert('Default template saved!')
        // window.location.reload()
      },
      (err) => {
        console.log('err when save template: ', err)
      }
    )
  }

  const timeOptions = [
    { label: 'NA', value: 'NaN' },
    { label: '9:00AM', value: 9 },
    { label: '10:00AM', value: 10 },
    { label: '11:00AM', value: 11 },
    { label: '12:00PM', value: 12 },
    { label: '1:00PM', value: 13 },
    { label: '2:00PM', value: 14 },
    { label: '3:00PM', value: 15 },
    { label: '4:00PM', value: 16 },
    { label: '5:00PM', value: 17 },
    { label: '6:00PM', value: 18 },
  ]

  const statusOptions = [
    { label: 'Unapproved Timesheet', value: 'incomplete' },
    { label: 'Approved Timesheet', value: 'completed' },
  ]

  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <button
            className="btn btn-info col-sm"
            onClick={() => handleOnSetDefault(timesheet)}
          >
            Set Default
          </button>
        </div>

        <div className="col-sm">
          <p>Total Billing Hours: {totalBillingHour}</p>
        </div>
        <div className="col-sm">
          <p>Total Compensation Hours: {totalCompensationHours} </p>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Starting Time</th>
            <th>Ending Time</th>
            <th>Total Hours</th>
            <th>Floating Day</th>
            <th>Holiday</th>
            <th>Vacation</th>
          </tr>
        </thead>
        <tbody>
          {week.map((element, i) => {
            return (
              <tr key={i} className={viewMode ? 'row-disabled' : ''}>
                <td>{week[i].day}</td>
                <td>{week[i].date}</td>
                <td>
                  {isWeekend(week[i]) ? (
                    <Select
                      options={timeOptions}
                      defaultValue={timeOptions[0]}
                      isDisabled
                    />
                  ) : (
                    <Select
                      options={timeOptions}
                      value={timeOptions.filter((t) => t.value == startTime[i])}
                      onChange={(e) => handleOnStartTime(e, i)}
                    />
                  )}
                </td>
                <td>
                  {isWeekend(week[i]) ? (
                    <Select
                      options={timeOptions}
                      defaultValue={timeOptions[0]}
                      isDisabled
                    />
                  ) : (
                    <Select
                      options={timeOptions}
                      onChange={(e) => handleOnEndTime(e, i)}
                      value={timeOptions.filter((t) => t.value == endTime[i])}
                    />
                  )}
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    value={isWeekend(week[i]) ? 'NA' : totalHour[i]}
                    size="1"
                    readOnly
                    disabled
                  ></input>
                </td>
                <td className="text-center">
                  {/* {console.log('week floating', week[i].floating)} */}

                  <input
                    type="checkbox"
                    // value={week[i].floating}
                    name={'dayOff' + i}
                    htmlFor="floating"
                    checked={!!week[i].floating}
                    defaultChecked={week[i].floating}
                    onChange={(e) => handleFloat(e, i)}
                    disabled={
                      isWeekend(week[i]) ||
                      (floatLeft.current <= 0 && week[i].floating == false)
                    }
                  ></input>
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    htmlFor="holiday"
                    // value={false}
                    name={'dayOff' + i}
                    defaultChecked={isWeekend(week[i])}
                    disabled
                    readOnly={isWeekend(week[i])}
                  ></input>
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    htmlFor="vacation"
                    // value={false}
                    checked={!!week[i].vacation}
                    name={'dayOff' + i}
                    disabled={
                      isWeekend(week[i]) ||
                      (vacaLeft.current <= 0 && week[i].vacation == false)
                    }
                    onChange={(e) => handleVaca(e, i)}
                  ></input>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className={viewMode ? 'not-display' : 'container'}>
        <div className="row">
          <div className="col-sm">
            <form action="">
              <div className="col-sm">
                <input type="file" />
              </div>
            </form>
            <button
              onClick={() => {
                setTimeout(() => {
                  alert('File submitted!')
                }, 500)
              }}
            >
              Submit
            </button>
          </div>

          <div className="col-sm">
            <Select
              options={statusOptions}
              onChange={(e) => handleStatusOpt(e)}
            />
          </div>
          <div className="col-sm">
            <button
              className="btn btn-primary"
              onClick={() => handleOnSaveTimeSheet(timesheet)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <div>
        <p style={{ marginTop: 100 }}></p>
      </div>
    </div>
  )
}

export default TimeSheetTable
