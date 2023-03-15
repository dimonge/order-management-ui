import React from 'react'
import Box from '@mui/material/Box'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'

type AddTaskButtonProps = {
  onAddTaskClick: any;
}
export default function AddTaskButton({ onAddTaskClick }: AddTaskButtonProps) {
  return (
    <Box sx={{transform: 'translateZ(0px)'}}>
      <SpeedDial
        ariaLabel="Add task"
        sx={{ position: 'absolute', bottom: 16, left: 16 }}
        onClick={onAddTaskClick}
        icon={<SpeedDialIcon />}
      ></SpeedDial>
    </Box>
  )
}
