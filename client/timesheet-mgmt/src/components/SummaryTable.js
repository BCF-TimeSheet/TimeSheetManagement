import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import {Link} from "react-router-dom";
import {Table} from "react-bootstrap";
import AuthService from "../services/auth.service";

function SummaryTable(props) {
    const [summary, setSummary] = useState(props.summary)

    //Get current user from localstorage
    useEffect(() => {
        const currSummary = props.summary
        setSummary(currSummary)
    }, [])

    console.log('Props', props)
    console.log(props.summary)

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>WeekEnding</th>
                    <th>Total Hours</th>
                    <th>Submission Status</th>
                    <th>Approval Status</th>
                    <th>Option</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {summary.map((element, i)=>{
                    return (<tr key={i}>
                        <td>{element.weekEnd}</td>
                            <td>{element.totalBillingHours}</td>
                            <td>{element.submissionStatus}</td>
                            <td>{element.approvalStatus}</td>
                            <Link to={`/timesheet${element.endDate}`}>
                                {element.submissionStatus === 'incomplete' ? 'Edit' : 'View'}
                            </Link>
                        {/*hard code comment*/}
                            <td>1 floating day required</td>
                    </tr>)
                })}
                </tbody>
            </Table>
        </div>
    )
}

export default SummaryTable
