import React, { useState } from 'react'
import { 
  Button, 
  Container, 
  FormControl, 
  FormControlLabel, 
  Grid, 
  InputLabel, 
  MenuItem, 
  Paper, 
  Select, 
  Switch, 
  TextField 
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

import "react-phone-input-2/lib/material.css"
import { FieldDateTimePicker } from './components'
import MapView from '../MapView/MapView'
import TaskHeader from './components/TaskHeader'
import TaskFooter from './components/TaskFooter'
import SearchOrCreateCustomer from './components/SearchOrCreateField'

interface OptionsProps {
  label: string
  value: string
}
interface TaskFormProps {
  customersOptionList: Array<OptionsProps>
  companyAddressesOptionList: Array<OptionsProps>
}
function TaskForm({customersOptionList, companyAddressesOptionList}: TaskFormProps) {

  const { register, control, handleSubmit } = useForm()
  const onSubmit = (data: any) => console.log('form data: ', data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={4} style={{ height: '100vh', overflow: 'auto' }}>
          <TaskHeader />
          <Paper
            style={{ paddingTop: 20, paddingBottom: 20, minHeight: '80%' }}
          >
            <Container>
              <div style={{ marginBottom: '1rem' }}>
                <Controller
                  name="pickup_location"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormControl fullWidth>
                      <InputLabel id="pickup-location">
                        Pickup location
                      </InputLabel>
                      <Select
                        id="pickup-location"
                        labelId="pickup-location"
                        label="Pickup location"
                        {...field}
                        value=""
                        style={{ width: '100%' }}
                      >
                        {companyAddressesOptionList.map(
                          ({ value, label }: OptionsProps) => {
                            return (
                              <MenuItem key={value} value={value}>
                                {label}
                              </MenuItem>
                            )
                          }
                        )}
                      </Select>
                    </FormControl>
                  )}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <SearchOrCreateCustomer
                  options={customersOptionList}
                  label="Dropoff location"
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <Controller
                  name="pickup_time"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <FieldDateTimePicker {...field} />}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <Controller
                  name="dropoff_time"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <FieldDateTimePicker {...field} />}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <Controller
                  name="no_contact_delivery"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Switch defaultChecked {...field} />}
                      label="No contact delivery"
                    />
                  )}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <Controller
                  name="comments_for_driver"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Comments for driver"
                      style={{ width: '100%' }}
                      multiline
                      rows={4}
                      {...field}
                    />
                  )}
                />
              </div>
            </Container>
          </Paper>
          <TaskFooter>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ color: 'black' }}>
                Delivery Cost
              </Grid>
              <Grid item xs={6} sx={{ color: 'black', textAlign: 'right' }}>
                $12.50
              </Grid>

              <Grid item xs={6}>
                <Button
                  onClick={() => console.log('save')}
                  sx={{ width: '100%' }}
                  variant="contained"
                >
                  Schedule Delivery
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => console.log('save')}
                  sx={{ width: '100%' }}
                  variant="contained"
                >
                  Deliver Now
                </Button>
              </Grid>
            </Grid>
          </TaskFooter>
        </Grid>
        <Grid item xs={8}>
          <MapView />
        </Grid>
      </Grid>
    </form>
  )
}

export default TaskForm
