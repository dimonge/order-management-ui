import BaseTaskTracking from "@/containers/Tasks/TaskTrack/TaskItem"

export default {
  name: 'TaskTracking',
  component: BaseTaskTracking
}

const Template = () => {
  return <BaseTaskTracking />
}

export const TaskTracking = () => <Template />