import * as React from "react"
import { TASK } from "@/models/helper"
import TaskBoard from "./components/TasksBoard"

type TaskBoardContainerProps = {
  items: Array<TASK.TaskProps>
}
const TasksBoardContainer = ({ items }: TaskBoardContainerProps) => {
  return <TaskBoard items={items} />
}

export default TasksBoardContainer;