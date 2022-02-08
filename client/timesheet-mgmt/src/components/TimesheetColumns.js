export const COLUMNS = [
  {
    Header: 'Day',
    accessor: 'day',
  },
  {
    Header: 'Date',
    accessor: 'date',
  },
  {
    Header: 'Starting Time',
    accessor: 'startTime',
    Cell: '10',
  },
  {
    Header: 'Ending Time',
    accessor: 'endTime',
  },
  {
    Header: 'Total Hours',
    Cell: '10',
  },
  {
    Header: 'Floating Day',
    accessor: 'floating',
    Cell: (props) => {
      return (
        <span>
          {props.floating ? 'Yes' : 'No'} {props.row.startTime}
        </span>
      )
    },
  },
  {
    Header: 'Holiday',
    accessor: 'holiday',
  },
  {
    Header: 'Vacation',
    accessor: 'vacation',
  },
]
