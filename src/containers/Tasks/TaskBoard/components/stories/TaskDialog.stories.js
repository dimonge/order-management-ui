import TaskDialog from "../TaskDialog"
import TASK_DATA from "@/fixtures/task"

export default {
  name: "TaskDialog",
  component: TaskDialog
}

const Template = () => (
  <TaskDialog item={TASK_DATA} onClose={() => console.log('close')} />
)

export const SimpleTaskDialog = () => <Template />