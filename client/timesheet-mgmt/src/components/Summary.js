import React, { useState, useEffect, useRef } from 'react'
// import AuthService from '../services/auth.service'
import ReactTooltip from 'react-tooltip'
import { AiFillInfoCircle } from 'react-icons/ai'
import TimesheetService from '../services/timesheet.service'
function Summary() {
  const [timesheet, setTimeSheet] = useState([])
  const [week, setWeek] = useState([])

  const float = useRef([])
  const vaca = useRef([])

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
      response.data.forEach((ts, i) => {
        float.current[i] = 0
        vaca.current[i] = 0
        ts.days.forEach((day) => {
          if (day.floating == true) {
            float.current[i] = float.current[i] + 1
          }
          if (day.vacation == true) {
            vaca.current[i] = vaca.current[i] + 1
          }
        })
      })
      console.log('float', float.current)
      console.log('vaca', vaca.current)
    }
  }
  useEffect(() => {
    getTimeSheet()
  }, [])

  useEffect(() => {
    console.log('render')

    timesheet.forEach((ts, i) => {
      float.current[i] = 0
      vaca.current[i] = 0
      ts.days.forEach((day) => {
        if (day.floating == true) {
          float.current[i] = float.current[i] + 1
        }
        if (day.vacation == true) {
          vaca.current[i] = vaca.current[i] + 1
        }
      })
    })
    const currWeek = [...week]
    setWeek(currWeek)
  }, [timesheet])

  return (
    <div>
      {timesheet.length > 0 && (
        <table className="table table-striped">
          <thead className="thead-light">
            <tr>
              <th>WeekEnding</th>
              <th>Total Hours</th>
              <th>Submission Status</th>
              <th>Approval of Status</th>
              <th>Option</th>
              <th>Comments</th>
            </tr>
          </thead>
          {console.log('timeSheet', timesheet)}
          <tbody>
            {timesheet.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.weekEnd}</td>
                  <td>{e.totalBillingHours}</td>
                  <td>{e.submissionStatus}</td>
                  <td>{e.approvalStatus}</td>
                  <td>
                    {e.submissionStatus == 'incomplete' ? (
                      <button>Edit</button>
                    ) : (
                      <button>View</button>
                    )}
                  </td>
                  <td>
                    {float.current[i] > 0 && (
                      <div>
                        {float.current[i]} floating days required
                        <ReactTooltip
                          place="top"
                          effect="solid"
                          id="infoCircle"
                        >
                          <span> {e.floatingDayLeft} floating days left</span>
                        </ReactTooltip>
                        <AiFillInfoCircle data-tip data-for="infoCircle" />
                      </div>
                    )}
                    {vaca.current[i] > 0 && (
                      <div>
                        {vaca.current[i]} vacation required
                        <ReactTooltip
                          place="top"
                          effect="solid"
                          id="infoCircleV"
                        >
                          <span>{e.vacationDayLeft} vacation left</span>
                        </ReactTooltip>
                        <AiFillInfoCircle data-tip data-for="infoCircleV" />
                      </div>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Summary
