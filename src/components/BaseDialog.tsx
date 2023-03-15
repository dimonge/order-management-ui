import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

type BaseDialogProps = {
  title: string | React.ReactElement
  children: React.ReactElement
  actions: React.ReactElement
  dialogProps?: any;
  onClose: () => void
}

export default function BaseDialog({
  title,
  children,
  actions,
  dialogProps
}: BaseDialogProps) {
  return (
    <div>
      <Dialog
        open
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        {...dialogProps}
      >
        <DialogTitle id="alert-dialog-title">
          { title }
        </DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          { actions }
        </DialogActions>
      </Dialog>
    </div>
  )
}
