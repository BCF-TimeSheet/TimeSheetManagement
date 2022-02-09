import React, { useState, useEffect } from 'react'
// import AuthService from '../services/auth.service'
import ReactTooltip from 'react-tooltip'
import { AiFillInfoCircle } from 'react-icons/ai'
import TimesheetService from '../services/timesheet.service'
function Summary() {
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
                    {e.floatingDayLeft > 0 && (
                      <p>
                        {e.floatingDayLeft} floating days required
                        <ReactTooltip
                          place="top"
                          effect="solid"
                          id="infoCircle"
                        >
                          {3 - e.floatingDayLeft} floating days left
                        </ReactTooltip>
                        <AiFillInfoCircle data-tip data-for="infoCircle" />
                      </p>
                    )}
                    {e.vacationDayLeft > 0 && (
                      <p>
                        {e.vacationDayLeft} vacation required{' '}
                        <ReactTooltip
                          place="top"
                          effect="solid"
                          id="infoCircleV"
                        >
                          {3 - e.vacationDayLeft} vacation left
                        </ReactTooltip>
                        <AiFillInfoCircle data-tip data-for="infoCircleV" />
                      </p>
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
