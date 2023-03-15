import * as React from 'react'
import { Grid } from '@mui/material'

import Header from '@/containers/Tasks/TaskBoard/components/Header'
import InTransit from '@/containers/Tasks/TaskBoard/components/InTransit'
import WaitingForPickup from '@/containers/Tasks/TaskBoard/components/WaitingForPickup'
import TaskDialog from '@/contains/Tasks/TaskBoard/components/TaskDialog'

import { TASK } from "@/models/helper"

type TaskBoardProps = {
  items: Array<any>
}

const TaskBoard = ({ items }: TaskBoardProps) => {
  const [viewTask, setViewTask] = React.useState(null)

  
  const waitingForPickupFilter = TASK.waitingForPickupFilter(items)
  const inTransitFilter = TASK.inTransitFilter(items)
  
  const waitingForPickup: any = waitingForPickupFilter.map((item: any) => (
    <WaitingForPickup item={item} onClick={() => setViewTask(item)} />
    ))
    
  const transit: any = inTransitFilter.map((item: any) => (
      <InTransit item={item} />
      ))
      
  const dialog = null; //<TaskDialog item={viewTask} />
  return (
    <>
      <Grid
        container 
        spacing={2}
        style={{ height: 'calc(100vh - 80px)' }}
      >
        <Header title={`Waiting for pickup (${waitingForPickupFilter.length})`}>
          {waitingForPickup}
        </Header>
        <Header title={`Transit (${inTransitFilter.length})`}>{transit}</Header>
      </Grid>
      {viewTask && dialog}
    </>
  )
}

export default TaskBoard
