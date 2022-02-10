import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './TimesheetColumns'

function TimeSheetTable(props) {
  // const [week, setWeek] = useState()
  // useEffect(() => {
  //   setWeek(weekData)
  // }, [weekData])
  // if (week) console.log(week)
  console.log('Props', props)

  console.log(props.week)
  return (
    <div>
      <table>
        <thead>
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
          <tr>
            <td>{props.week && props.week[0].day}</td>
            <td>{props.week && props.week[0].date}</td>
            <td>{props.week && props.week[0].startTime}</td>
            <td>{props.week && props.week[0].endTime}</td>
          </tr>
        </tbody>
      </table>
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
