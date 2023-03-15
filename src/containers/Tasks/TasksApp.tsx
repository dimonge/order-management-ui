import * as React from 'react'

import { useAppState } from '@/store/config'
import { selectTasks } from '@/store/selectors/tasks';

import TasksBoardContainer from './TaskBoard'
import TaskTabs from './components/TaskTabs';
import TaskTrack from './TaskTrack';

const TasksApp = () => {
  const { state } = useAppState();
  const items = selectTasks(state)
  
  return (
    <TaskTabs
      mapView={<TaskTrack items={items} />}
      liveView={<TasksBoardContainer items={items} />}
    />
  )
}

export default TasksApp
