import React, { useState, useEffect } from 'react'
import AuthService from '../services/auth.service'
import TimesheetService from "../services/timesheet.service";
import SummaryTable from "./SummaryTable";

function Summary(props) {

    const [currentUser, setCurrentUser] = useState(undefined)
    const [summary, setSummary] = useState([])

    //Get current user from localstorage
    useEffect(() => {
        const user = AuthService.getCurrentUser()

        if (user) {
            setCurrentUser(user)
        }
        getUserTimeSheet()
    }, [])

    const getUserTimeSheet = async () => {
        const response = await TimesheetService.getUserAllTimeSheet().catch((err) =>
            console.log(err)
        )
        if (response) {
            const timesheetRes = response.data
            console.log(timesheetRes)
            setSummary(response.data)
        }
    }


    return <div>{summary.length > 0 && <SummaryTable summary={summary} />}</div>
}

export default Summary