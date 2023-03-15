import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker'


export default function ResponsiveDateTimePickers() {
  const [value, setValue] = React.useState<Date | null>(
    null
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue)
        }}        
        renderInput={(params: any) => <TextField {...params}  style={{width: "100%"}}/>}
      />
    </LocalizationProvider>
  )
}
