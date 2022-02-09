/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import React, { useState, useEffect, useMemo } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function TimeSheetTable(props) {
  const [week, setWeek] = useState(props.week)
  useEffect(() => {
    const currProps = props.week
    setWeek(currProps)
  }, [props.week])

  console.log('props timesheet: ', props.timesheet)

  const initialStartime = []
  const initialEndTime = []
  const initialTotalHours = []
  const initialFloating = []
  const initialVacation = []
  week.forEach((w) => {
    initialStartime.push(parseInt(w.startTime))
    initialEndTime.push(parseInt(w.endTime))
    initialTotalHours.push(parseInt(w.endTime) - parseInt(w.startTime))
    initialFloating.push(w.floating)
    initialVacation.push(w.vacation)
  })

  useEffect(() => {
    const curTotalHours = []
    week.forEach((w) => {
      const startTime = parseInt(w.startTime)
      const endTime = parseInt(w.endTime)
      if (startTime < endTime) {
        curTotalHours.push(parseInt(w.endTime) - parseInt(w.startTime))
      } else curTotalHours.push(0)
    })
    setTotalHour([...curTotalHours])
    setTotalBillingHour(
      curTotalHours.reduce((s, i) => s + i),
      0
    )
  }, [week])

  const [startTime, setStartTime] = useState([...initialStartime])
  const [endTime, setEndTime] = useState([...initialEndTime])
  const [totalHour, setTotalHour] = useState([...initialTotalHours])
  const [totalBillingHour, setTotalBillingHour] = useState(
    props.timesheet.totalBillingHour
  )
  const [totalCompensationHours, setTotalCompensationHours] = useState(
    props.timesheet.totalCompensationHours
  )
  const [selectedDate, setSelectedDate] = useState(
    Date.parse(props.week[6].date.replace(/-/g, '/'))
  )
  const [vacation, setVacation] = useState(initialFloating)
  const [floating, setFloating] = useState(initialVacation)

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
    if (e.target.checked == true && vaca[i] == true) {
      float.splice(i, 1, true)
      vaca.splice(i, 1, false)
      setFloating([...float])
      setVacation([...vaca])

      currWeek.splice(i, 1, { ...week[i], floating: true, vacation: false })
      setWeek([...currWeek])
    } else if (e.target.checked == true && vaca[i] == false) {
      float.splice(i, 1, true)
      setFloating([...float])

      currWeek.splice(i, 1, { ...week[i], floating: true })
      setWeek([...currWeek])
    } else {
      float.splice(i, 1, false)
      setFloating([...float])
      currWeek.splice(i, 1, { ...week[i], floating: false })
      setWeek([...currWeek])
    }
  }

  const handleVaca = (e, i) => {
    const float = [...floating]
    const vaca = [...vacation]
    const currWeek = [...week]

    if (e.target.checked == true && float[i] == true) {
      float.splice(i, 1, false)
      vaca.splice(i, 1, true)
      setFloating([...float])
      setVacation([...vaca])

      currWeek.splice(i, 1, { ...week[i], floating: false, vacation: true })
      setWeek([...currWeek])
    } else if (e.target.checked == true && float[i] == false) {
      vaca.splice(i, 1, true)
      setVacation([...vaca])
      currWeek.splice(i, 1, { ...week[i], vacation: true })
      setWeek([...currWeek])
    } else {
      vaca.splice(i, 1, false)
      setVacation([...vaca])
      currWeek.splice(i, 1, { ...week[i], vacation: false })
      setWeek([...currWeek])
    }
  }

  const isWeekend = (week) => {
    return week.day == 'Sunday' || week.day == 'Saturday'
  }

  const timeOptions = [
    { label: 'NA', value: 'NA' },
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

  console.log('props.week:', props.week)
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <button className="btn btn-info col-sm">Set Default</button>
        </div>
        <div className="col-sm">
          <p>Week Ending</p>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
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
              <tr key={i}>
                <td>{props.week[i].day}</td>
                <td>{props.week[i].date}</td>
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
                      defaultValue={timeOptions.filter(
                        (t) => t.value == week[i].startTime
                      )}
                      onChange={(e) => handleOnStartTime(e, i)}
                    />
                  )}
                </td>
                <td>
                  {isWeekend(!!week[i]) ? (
                    <Select
                      options={timeOptions}
                      defaultValue={timeOptions[0]}
                      isDisabled
                    />
                  ) : (
                    <Select
                      options={timeOptions}
                      onChange={(e) => handleOnEndTime(e, i)}
                      defaultValue={timeOptions.filter(
                        (t) => t.value == week[i].endTime
                      )}
                    />
                  )}
                </td>
                <td className="text-center">
                  <input
                    type="text"
                    value={isWeekend(!!week[i]) ? 'NA' : totalHour[i]}
                    size="1"
                    readOnly
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
                    disabled={isWeekend(week[i])}
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
                    disabled={isWeekend(week[i])}
                    onChange={(e) => handleVaca(e, i)}
                  ></input>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="row">
        <div className="row-sm">
          <button className="btn btn-primary">Save</button>
        </div>
        <div>
          <p> </p>
        </div>

        <form action="">
          <div className="row-sm">
            <input type="file" />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

// function TimeSheetTable(props) {
//   const data = props.week
//   console.log('Days:', data)
//   const columns = useMemo(() => COLUMNS, [])
//   const tableIns = useTable({ columns, data })
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableIns
//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render('Header')} </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row)
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//               })}
//             </tr>
//           )
//         })}
//       </tbody>
//     </table>
//   )
// }

export default TimeSheetTable
