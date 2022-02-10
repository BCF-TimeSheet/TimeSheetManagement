import Data from './Data'
import { useState } from 'react'
import { Select, Checkbox } from 'antd'
import { DatePicker, Space } from 'antd'
import 'antd/dist/antd.css'

function AnotherTable() {
  // Set default index as Saturday's index
  const [index, setIndex] = useState(6)

  // Define Date State
  const [sunDate, setSunDate] = useState(Data[index - 6].date)
  const [monDate, setMonDate] = useState(Data[index - 5].date)
  const [tueDate, setTueDate] = useState(Data[index - 4].date)
  const [wedDate, setWedDate] = useState(Data[index - 3].date)
  const [thuDate, setThuDate] = useState(Data[index - 2].date)
  const [friDate, setFriDate] = useState(Data[index - 1].date)
  const [satDate, setSatDate] = useState(Data[index].date)

  // Define Start Time State
  const [sunStartTime, setSunStartTime] = useState(Data[index - 6].startTime)
  const [monStartTime, setMonStartTime] = useState(Data[index - 5].startTime)
  const [tueStartTime, setTueStartTime] = useState(Data[index - 4].startTime)
  const [wedStartTime, setWedStartTime] = useState(Data[index - 3].startTime)
  const [thuStartTime, setThuStartTime] = useState(Data[index - 2].startTime)
  const [friStartTime, setFriStartTime] = useState(Data[index - 1].startTime)
  const [satStartTime, setSatStartTime] = useState(Data[index].startTime)

  // Define End Time State
  const [sunEndTime, setSunEndTime] = useState(Data[index - 6].endTime)
  const [monEndTime, setMonEndTime] = useState(Data[index - 5].endTime)
  const [tueEndTime, setTueEndTime] = useState(Data[index - 4].endTime)
  const [wedEndTime, setWedEndTime] = useState(Data[index - 3].endTime)
  const [thuEndTime, setThuEndTime] = useState(Data[index - 2].endTime)
  const [friEndTime, setFriEndTime] = useState(Data[index - 1].endTime)
  const [satEndTime, setSatEndTime] = useState(Data[index].endTime)

  // Define Total Hours
  const [sunTotalHours, setSunTotalHours] = useState(0)
  const [monTotalHours, setMonTotalHours] = useState(
    Data[index - 5].endTime - Data[index - 5].startTime
  )
  const [tueTotalHours, setTueTotalHours] = useState(
    Data[index - 4].endTime - Data[index - 4].startTime
  )
  const [wedTotalHours, setWedTotalHours] = useState(
    Data[index - 3].endTime - Data[index - 3].startTime
  )
  const [thuTotalHours, setThuTotalHours] = useState(
    Data[index - 2].endTime - Data[index - 2].startTime
  )
  const [friTotalHours, setFriTotalHours] = useState(
    Data[index - 1].endTime - Data[index - 1].startTime
  )
  const [satTotalHours, setSatTotalHours] = useState(0)

  // Define Floating Day
  const [sunFloating, setSunFloating] = useState(Data[index - 6].floatingDay)
  const [monFloating, setMonFloating] = useState(Data[index - 5].floatingDay)
  const [tueFloating, setTueFloating] = useState(Data[index - 4].floatingDay)
  const [wedFloating, setWedFloating] = useState(Data[index - 3].floatingDay)
  const [thuFloating, setThuFloating] = useState(Data[index - 2].floatingDay)
  const [friFloating, setFriFloating] = useState(Data[index - 1].floatingDay)
  const [satFloating, setSatFloating] = useState(Data[index].floatingDay)

  // Define Holiday
  const [sunHoliday, setSunHoliday] = useState(Data[index - 6].holiday)
  const [monHoliday, setMonHoliday] = useState(Data[index - 5].holiday)
  const [tueHoliday, setTueHoliday] = useState(Data[index - 4].holiday)
  const [wedHoliday, setWedHoliday] = useState(Data[index - 3].holiday)
  const [thuHoliday, setThuHoliday] = useState(Data[index - 2].holiday)
  const [friHoliday, setFriHoliday] = useState(Data[index - 1].holiday)
  const [satHoliday, setSatHoliday] = useState(Data[index].holiday)

  // Define Vacation Day
  const [sunVacation, setSunVacation] = useState(Data[index - 6].vacation)
  const [monVacation, setMonVacation] = useState(Data[index - 5].vacation)
  const [tueVacation, setTueVacation] = useState(Data[index - 4].vacation)
  const [wedVacation, setWedVacation] = useState(Data[index - 3].vacation)
  const [thuVacation, setThuVacation] = useState(Data[index - 2].vacation)
  const [friVacation, setFriVacation] = useState(Data[index - 1].vacation)
  const [satVacation, setSatVacation] = useState(Data[index].vacation)

  const [totalBillingHours, setTotalBillingHours] = useState(
    monTotalHours +
      tueTotalHours +
      wedTotalHours +
      thuTotalHours +
      friTotalHours +
      satTotalHours +
      sunTotalHours
  )

  const [totalCompensatedHours, setTotalCompensatedHours] = useState(
    monTotalHours * !monHoliday +
      tueTotalHours * !tueHoliday +
      wedTotalHours * !wedHoliday +
      thuTotalHours * !thuHoliday +
      friTotalHours * !friHoliday +
      satTotalHours * !satHoliday +
      sunTotalHours * !sunHoliday
  )

  const { Option } = Select

  function onChange1(date, dateString) {
    //console.log(dateString);
    let uid = Data.filter(check)
    const index = Data.findIndex((i) => i.date === dateString)
    function check(item) {
      if (item.date === dateString) {
        return item.id
      }
    }
    setIndex(index)
    initialize(index)
    console.log('dsgioewgiejighie' + index)
  }

  function initialize(index) {
    setSatDate(Data[index].date)
    setFriDate(Data[index - 1].date)
    setThuDate(Data[index - 2].date)
    setWedDate(Data[index - 3].date)
    setTueDate(Data[index - 4].date)
    setMonDate(Data[index - 5].date)
    setSunDate(Data[index - 6].date)

    setSatStartTime(Data[index].startTime)
    setFriStartTime(Data[index - 1].startTime)
    setTueStartTime(Data[index - 2].startTime)
    setWedStartTime(Data[index - 3].startTime)
    setTueStartTime(Data[index - 4].startTime)
    setMonStartTime(Data[index - 5].startTime)
    setSunStartTime(Data[index - 6].startTime)

    setSatEndTime(Data[index].endTime)
    setFriEndTime(Data[index - 1].endTime)
    setTueEndTime(Data[index - 2].endTime)
    setWedEndTime(Data[index - 3].endTime)
    setTueEndTime(Data[index - 4].endTime)
    setMonEndTime(Data[index - 5].endTime)
    setSunEndTime(Data[index - 6].endTime)

    setSatTotalHours(0)
    setFriTotalHours(Data[index - 1].endTime - Data[index - 1].startTime)
    setTueTotalHours(Data[index - 2].endTime - Data[index - 2].startTime)
    setWedTotalHours(Data[index - 3].endTime - Data[index - 3].startTime)
    setTueTotalHours(Data[index - 4].endTime - Data[index - 4].startTime)
    setMonTotalHours(Data[index - 5].endTime - Data[index - 5].startTime)
    setSunTotalHours(0)

    setSatFloating(Data[index].floatingDay)
    setFriFloating(Data[index - 1].floatingDay)
    setThuFloating(Data[index - 2].floatingDay)
    setWedFloating(Data[index - 3].floatingDay)
    setTueFloating(Data[index - 4].floatingDay)
    setMonFloating(Data[index - 5].floatingDay)
    setSunFloating(Data[index - 6].floatingDay)

    setSatHoliday(Data[index].holiday)
    setFriHoliday(Data[index - 1].holiday)
    setThuHoliday(Data[index - 2].holiday)
    setWedHoliday(Data[index - 3].holiday)
    setTueHoliday(Data[index - 4].holiday)
    setMonHoliday(Data[index - 5].holiday)
    setSunHoliday(Data[index - 6].holiday)

    setSatVacation(Data[index].vacation)
    setFriVacation(Data[index - 1].vacation)
    setThuVacation(Data[index - 2].vacation)
    setWedVacation(Data[index - 3].vacation)
    setTueVacation(Data[index - 4].vacation)
    setMonVacation(Data[index - 5].vacation)
    setSunVacation(Data[index - 6].vacation)

    setTotalBillingHours(
      // monTotalHours +
      //   tueTotalHours +
      //   wedTotalHours +
      //   thuTotalHours +
      //   friTotalHours +
      //   satTotalHours +
      //   sunTotalHours
      parseInt(Data[index - 1].endTime) -
        parseInt(Data[index - 1].startTime) +
        parseInt(Data[index - 2].endTime) -
        parseInt(Data[index - 2].startTime) +
        parseInt(Data[index - 3].endTime) -
        parseInt(Data[index - 3].startTime) +
        parseInt(Data[index - 4].endTime) -
        parseInt(Data[index - 4].startTime) +
        parseInt(Data[index - 5].endTime) -
        parseInt(Data[index - 5].startTime)
    )

    setTotalCompensatedHours(
      monTotalHours * !monHoliday +
        tueTotalHours * !tueHoliday +
        wedTotalHours * !wedHoliday +
        thuTotalHours * !thuHoliday +
        friTotalHours * !friHoliday +
        satTotalHours * !satHoliday +
        sunTotalHours * !sunHoliday
    )
  }

  function onChangeFloating(e) {
    if (e.target.id === '1') {
      setMonFloating(!monFloating)
      setMonVacation(false)
      setMonStartTime(0)
      setMonEndTime(0)
      setMonTotalHours(0)
      setTotalBillingHours(totalBillingHours - monTotalHours)
    } else if (e.target.id === '2') {
      setTueFloating(!tueFloating)
      setTueVacation(false)
      setTueStartTime(0)
      setTueEndTime(0)
      setTueTotalHours(0)
    } else if (e.target.id === '3') {
      setWedFloating(!wedFloating)
      setWedVacation(false)
      setWedStartTime(0)
      setWedEndTime(0)
      setWedTotalHours(0)
    } else if (e.target.id === '4') {
      setThuFloating(!thuFloating)
      setThuVacation(false)
      setThuStartTime(0)
      setThuEndTime(0)
      setThuTotalHours(0)
    } else if (e.target.id === '5') {
      setFriFloating(!friFloating)
      setFriVacation(false)
      setFriStartTime(0)
      setFriEndTime(0)
      setFriTotalHours(0)
    } else if (e.target.id === '6') {
      setSatFloating(!satFloating)
      setSatVacation(false)
      setSatStartTime(0)
      setSatEndTime(0)
      setSatTotalHours(0)
    } else if (e.target.id === '7') {
      setSunFloating(!sunFloating)
      setSunVacation(false)
      setSunStartTime(0)
      setSunEndTime(0)
      setSunTotalHours(0)
    }
  }

  function onChangeVacation(e) {
    if (e.target.id === '1') {
      setMonVacation(!monVacation)
      setMonFloating(false)
      setMonStartTime(0)
      setMonEndTime(0)
    } else if (e.target.id === '2') {
      setTueVacation(!tueVacation)
      setTueFloating(false)
      setTueStartTime(0)
      setTueEndTime(0)
    } else if (e.target.id === '3') {
      setWedVacation(!wedVacation)
      setWedFloating(false)
      setWedStartTime(0)
      setWedEndTime(0)
    } else if (e.target.id === '4') {
      setThuVacation(!thuVacation)
      setThuFloating(false)
      setThuStartTime(0)
      setThuEndTime(0)
    } else if (e.target.id === '5') {
      setFriVacation(!friVacation)
      setFriFloating(false)
      setFriStartTime(0)
      setFriEndTime(0)
    } else if (e.target.id === '6') {
      setSatVacation(!satVacation)
      setSatFloating(false)
      setSatStartTime(0)
      setSatEndTime(0)
    } else if (e.target.id === '7') {
      setSunVacation(!sunVacation)
      setSunFloating(false)
      setSunStartTime(0)
      setSunEndTime(0)
    }
  }

  function onChangeMonStartTime(value) {
    setMonTotalHours(monEndTime - value ? monEndTime - value : 0)
    setMonStartTime(value)
    setTotalBillingHours(
      (monEndTime - value ? monEndTime - value : 0) +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeTueStartTime(value) {
    setTueTotalHours(tueEndTime - value ? tueEndTime - value : 0)
    setTueStartTime(value)
    setTotalBillingHours(
      monTotalHours +
        (tueEndTime - value ? tueEndTime - value : 0) +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeWedStartTime(value) {
    setWedTotalHours(wedEndTime - value ? wedEndTime - value : 0)
    setWedStartTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        (wedEndTime - value ? wedEndTime - value : 0) +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeThuStartTime(value) {
    setThuTotalHours(thuEndTime - value ? thuEndTime - value : 0)
    setThuStartTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        (thuEndTime - value ? thuEndTime - value : 0) +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeFriStartTime(value) {
    setFriTotalHours(friEndTime - value ? friEndTime - value : 0)
    setFriStartTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        (friEndTime - value ? friEndTime - value : 0) +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeSatStartTime(value) {
    setSatTotalHours(satEndTime - value ? satEndTime - value : 0)
    setSatStartTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        (satEndTime - value ? satEndTime - value : 0) +
        sunTotalHours
    )
  }

  function onChangeSunStartTime(value) {
    setSunTotalHours(sunEndTime - value ? sunEndTime - value : 0)
    setSunStartTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        (sunEndTime - value ? sunEndTime - value : 0)
    )
  }

  function onChangeMonEndTime(value) {
    setMonTotalHours(value - monStartTime ? value - monStartTime : 0)
    setMonEndTime(value)
    setTotalBillingHours(
      (value - monStartTime ? value - monStartTime : 0) +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeTueEndTime(value) {
    setTueTotalHours(value - tueStartTime ? value - tueStartTime : 0)
    setTueEndTime(value)
    setTotalBillingHours(
      monTotalHours +
        (value - tueStartTime ? value - tueStartTime : 0) +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeWedEndTime(value) {
    setWedTotalHours(value - wedStartTime ? value - wedStartTime : 0)
    setWedEndTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        (value - wedStartTime ? value - wedStartTime : 0) +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeThuEndTime(value) {
    setThuTotalHours(value - thuStartTime ? value - thuStartTime : 0)
    setThuEndTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        (value - thuStartTime ? value - thuStartTime : 0) +
        friTotalHours +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeFriEndTime(value) {
    setFriTotalHours(value - friStartTime ? value - friStartTime : 0)
    setFriEndTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        (value - friStartTime ? value - friStartTime : 0) +
        satTotalHours +
        sunTotalHours
    )
  }

  function onChangeSatEndTime(value) {
    setSatTotalHours(value - satStartTime ? value - satStartTime : 0)
    setSatEndTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        (value - satStartTime ? value - satStartTime : 0) +
        sunTotalHours
    )
  }

  function onChangeSunEndTime(value) {
    setSunTotalHours(value - sunStartTime ? value - sunStartTime : 0)
    setSunEndTime(value)
    setTotalBillingHours(
      monTotalHours +
        tueTotalHours +
        wedTotalHours +
        thuTotalHours +
        friTotalHours +
        satTotalHours +
        (value - sunStartTime ? value - sunStartTime : 0)
    )
  }
  //
  function disabledDate(date1) {
    console.log('Date1', date1)
    var dt = new Date(date1)
    if (dt.getDay() !== 6) {
      return date1
    }
  }

  return (
    <div>
      <Space direction="vertical">
        <DatePicker
          format="MM/DD/YYYY"
          disabledDate={disabledDate}
          onChange={onChange1}
        />
      </Space>
      <span> Total Billing Hours: {totalBillingHours} </span>
      <span> Total Compensated Hours: {totalCompensatedHours}</span>
      <table>
        <tr>
          <th>Day</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Total Hours</th>
          <th>Floating Day</th>
          <th>Holiday</th>
          <th>Vacation</th>
        </tr>
        {/* {Data.map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.day}</td>
          <td>{item.date}</td>
          <td>
            <Model name={item.day} onChange={onChange} />
          </td>
          <td>
            <Model name={item.date} />
          </td>
          <td>{item.date}</td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
          <td><CheckBox /></td>
        </tr>
      ))} */}
        <tr>
          <td>Sunday</td>
          <td>{sunDate}</td>
          <td>
            <Select
              value={
                sunStartTime > 12
                  ? sunStartTime - 12 + ':00PM'
                  : sunStartTime === 0 || sunStartTime === 'N/A'
                  ? 'N/A'
                  : sunStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeSunStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                sunEndTime > 12
                  ? sunEndTime - 12 + ':00PM'
                  : sunEndTime === 0 || sunEndTime === 'N/A'
                  ? 'N/A'
                  : sunEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeSunEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{sunTotalHours}</td>
          <td>
            <Checkbox id="7" checked={sunFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={sunHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="7" checked={sunVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>{monDate}</td>
          <td>
            <Select
              value={
                monStartTime > 12
                  ? monStartTime - 12 + ':00PM'
                  : monStartTime === 0 || monStartTime === 'N/A'
                  ? 'N/A'
                  : monStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeMonStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                monEndTime > 12
                  ? monEndTime - 12 + ':00PM'
                  : monEndTime === 0 || monEndTime === 'N/A'
                  ? 'N/A'
                  : monEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeMonEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{monTotalHours}</td>
          <td>
            <Checkbox id="1" checked={monFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={monHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="1" checked={monVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>{tueDate}</td>
          <td>
            <Select
              value={
                tueStartTime > 12
                  ? tueStartTime - 12 + ':00PM'
                  : tueStartTime === 0 || tueStartTime === 'N/A'
                  ? 'N/A'
                  : tueStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeTueStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                tueEndTime > 12
                  ? tueEndTime - 12 + ':00PM'
                  : tueEndTime === 0 || tueEndTime === 'N/A'
                  ? 'N/A'
                  : tueEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeTueEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{tueTotalHours}</td>
          <td>
            <Checkbox id="2" checked={tueFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={tueHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="2" checked={tueVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>{wedDate}</td>
          <td>
            <Select
              value={
                wedStartTime > 12
                  ? wedStartTime - 12 + ':00PM'
                  : wedStartTime === 0 || wedStartTime === 'N/A'
                  ? 'N/A'
                  : wedStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeWedStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                wedEndTime > 12
                  ? wedEndTime - 12 + ':00PM'
                  : wedEndTime === 0 || wedEndTime === 'N/A'
                  ? 'N/A'
                  : wedEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeWedEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{wedTotalHours}</td>
          <td>
            <Checkbox id="3" checked={wedFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={wedHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="3" checked={wedVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>{thuDate}</td>
          <td>
            <Select
              value={
                thuStartTime > 12
                  ? thuStartTime - 12 + ':00PM'
                  : thuStartTime === 0 || thuStartTime === 'N/A'
                  ? 'N/A'
                  : thuStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeThuStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                thuEndTime > 12
                  ? thuEndTime - 12 + ':00PM'
                  : thuEndTime === 0 || thuEndTime === 'N/A'
                  ? 'N/A'
                  : thuEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeThuEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{thuTotalHours}</td>
          <td>
            <Checkbox id="4" checked={thuFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={thuHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="4" checked={thuVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>{friDate}</td>
          <td>
            <Select
              value={
                friStartTime > 12
                  ? friStartTime - 12 + ':00PM'
                  : friStartTime === 0 || friStartTime === 'N/A'
                  ? 'N/A'
                  : friStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeFriStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                friEndTime > 12
                  ? friEndTime - 12 + ':00PM'
                  : friEndTime === 0 || friEndTime === 'N/A'
                  ? 'N/A'
                  : friEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeFriEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{friTotalHours}</td>
          <td>
            <Checkbox id="5" checked={friFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={friHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="5" checked={friVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>{satDate}</td>
          <td>
            <Select
              value={
                satStartTime > 12
                  ? satStartTime - 12 + ':00PM'
                  : satStartTime === 0 || satStartTime === 'N/A'
                  ? 'N/A'
                  : satStartTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeSatStartTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>

          <td>
            <Select
              value={
                satEndTime > 12
                  ? satEndTime - 12 + ':00PM'
                  : satEndTime === 0 || satEndTime === 'N/A'
                  ? 'N/A'
                  : satEndTime + ':00AM'
              }
              style={{ width: 120 }}
              onChange={onChangeSatEndTime}
            >
              <Option value="N/A">N/A</Option>
              <Option value="9">09:00AM</Option>
              <Option value="10">10:00AM</Option>
              <Option value="11">11:00AM</Option>
              <Option value="12">12:00PM</Option>
              <Option value="13">01:00PM</Option>
              <Option value="14">02:00PM</Option>
              <Option value="15">03:00PM</Option>
              <Option value="16">04:00PM</Option>
              <Option value="17">05:00PM</Option>
              <Option value="18">06:00PM</Option>
            </Select>
          </td>
          <td>{satTotalHours}</td>
          <td>
            <Checkbox id="6" checked={satFloating} onChange={onChangeFloating}>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox defaultChecked={satHoliday} disabled>
              {' '}
            </Checkbox>
          </td>
          <td>
            <Checkbox id="6" checked={satVacation} onChange={onChangeVacation}>
              {' '}
            </Checkbox>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AnotherTable
