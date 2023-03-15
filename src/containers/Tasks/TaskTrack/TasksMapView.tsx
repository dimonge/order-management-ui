import React from 'react'

import MapView from '@/containers/MapView/MapView'
import InTransit from '../TaskBoard/components/InTransit'
import InTransitView from '../TaskBoard/components/InTransitView'
import { Grid } from '@mui/material'

const styles = {
  container: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'row'
  },
  taskContainer: {
    width: '35%'
  },
  mapContainer: {
    width: '65%'
  }
}

const TasksMapView = ({items}: any) => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <InTransitView items={items} />
      </Grid>
      <Grid item xs={8}>
        <MapView apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY} />
      </Grid>
    </Grid>
  )
}

export default TasksMapView;
