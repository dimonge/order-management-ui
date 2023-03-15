import * as React from "react"

import TaskMapView from '@/containers/Tasks/TaskTrack/TasksMapView'

const TaskTrack = ({ items }: any) => {
  return <TaskMapView items={items} />
}

export default TaskTrack;