import React from "react"
import { TASK } from "@/models/helper"
import { 
  Modal,
  ModalBody,
  ModalButton,
  ModalHeader,ModalFooter,
  ROLE,
  SIZE
} from "baseui/modal"
import { KIND as buttonKind } from "baseui/button"

export type TaskDialogProps = {
  item: TASK.TaskProps;
  onClose: () => void;
}
const TaskDialog = ({item, onClose}: TaskDialogProps) => {
  return (
    <Modal
      onClose={onClose}
      closeable
      isOpen
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
    >
      <ModalHeader>{TASK.getTrackingCode(item)}</ModalHeader>
      <ModalBody>task content</ModalBody>
      <ModalFooter>
        <ModalButton onClick={onClose}>
          Edit
        </ModalButton>
        <ModalButton kind={buttonKind.tertiary} onClick={onClose}>
          Close
        </ModalButton>
      </ModalFooter>
    </Modal>
  )
}

export default TaskDialog;