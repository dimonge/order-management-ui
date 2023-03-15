import * as React from "react"
import { TASK } from "@/models/helper"

export type EditTaskDialogProps = {
  item: TASK.TaskProps;
  onUpdate: () => void;
  onCancel: () => void;
}
const EditTaskDialog = ({item, onUpdate, onCancel}: EditTaskDialogProps) => {
  return <div></div>
}

export default EditTaskDialog;