import TASK_DATA from "@/fixtures/task"
import COMPANY_DATA from "@/fixtures/company"
import BaseTaskView from '../TaskView'

export default {
  name: 'TaskView',
  component: BaseTaskView
}

const Template = () => {
  return <BaseTaskView item={TASK_DATA} company={COMPANY_DATA} />
}

export const TaskView = () => <Template />