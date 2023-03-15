import React from 'react'
import BaseCalendar from '@/components/Calendar'

export default {
  title: 'Calendar',
  component: BaseCalendar
}

const Template = () => {
  return (
    <BaseCalendar
      value={new Date()}
      onChange={({ date }) => console.log(date)}
    />
  )
}

export const Calendar = () => <Template />
