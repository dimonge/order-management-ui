import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'baseui/datepicker'

function Calendar({ timeSelectStart, onChange, ...props }) {
  return (
    <DatePicker
      onChange={onChange}
      timeSelectStart={timeSelectStart}
      {...props}
    />
  )
}

Calendar.propTypes = {
  timeSelectStart: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

Calendar.defaultProps = {
  timeSelectStart: true
}

export default Calendar
