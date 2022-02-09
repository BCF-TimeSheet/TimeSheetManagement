import React, { useState, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './TimesheetColumns'
import Select from 'react-select'

function TimeSheetTable(props) {
  const [week, setWeek] = useState(props.week)
  useEffect(() => {
    setWeek(props.week)
  }, [props.week])

  console.log('week', week)

  const timeOptions = [
    { label: 'NA', value: null },
    { label: '9:00AM', value: 9 },
    { label: '10:00AM', value: 10 },
    { label: '11:00AM', value: 11 },
    { label: '12:00PM', value: 12 },
    { label: '1:00PM', value: 13 },
    { label: '2:00pM', value: 14 },
    { label: '3:00PM', value: 15 },
    { label: '4:00PM', value: 16 },
    { label: '5:00PM', value: 17 },
    { label: '6:00PM', value: 18 },
  ]

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
          {week.map((element, i) => {
            return (
              <tr key={i}>
                <td>{props.week[i].day}</td>
                <td>{props.week[i].date}</td>
                <td>
                  <Select options={timeOptions} />
                </td>
                <td>
                  <Select options={timeOptions} />
                </td>
                <td>{props.week[i].day}</td>
                <td>{props.week[i].day}</td>
                <td>{props.week[i].day}</td>
                <td>{props.week[i].day}</td>
              </tr>
            )
          })}
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
